"use server";

import { db } from "@/lib/db";
import { leads, inquiries } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

export async function downloadLeadsAndInquiries() {
  const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt));
  const allInquiries = await db
    .select()
    .from(inquiries)
    .orderBy(desc(inquiries.createdAt));

  // CSV Header
  let csv = "Type,Name,Email,Phone,Message,Date,Property ID\n";

  // Add Leads
  allLeads.forEach((lead) => {
    const cleanMessage = (lead.message || "").replace(/,/g, " "); // Basic sanitization
    csv += `Lead,${lead.name},${lead.email},${lead.phone},${cleanMessage},${lead.createdAt.toISOString()},${lead.propertyId || "N/A"}\n`;
  });

  // Add Inquiries
  allInquiries.forEach((inq) => {
    const cleanMessage = (inq.message || "").replace(/,/g, " ");
    csv += `Inquiry (${inq.type}),${inq.name},${inq.email},${inq.phone},${cleanMessage},${inq.createdAt.toISOString()},N/A\n`;
  });

  return csv;
}
