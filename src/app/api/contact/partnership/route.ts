import { NextRequest, NextResponse } from "next/server";
import { partnershipFormSchema } from "@/lib/validations/partnership";
import { createInquiry } from "@/lib/db/queries";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side validation
    const result = partnershipFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.issues },
        { status: 400 },
      );
    }

    // Save to database
    const inquiry = await createInquiry({
      type: "partnership",
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
      message: result.data.message,
      details: {
        company: result.data.company,
        partnershipType: result.data.partnershipType,
        businessSize: result.data.businessSize,
      },
    });

    return NextResponse.json(
      { message: "Partnership application submitted successfully", inquiry },
      { status: 201 },
    );
  } catch (error) {
    console.error("Partnership form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
