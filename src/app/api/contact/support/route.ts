import { NextRequest, NextResponse } from "next/server";
import { supportFormSchema } from "@/lib/validations/support";
import { createInquiry } from "@/lib/db/queries";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side validation
    const result = supportFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.issues },
        { status: 400 },
      );
    }

    // Save to database
    const inquiry = await createInquiry({
      type: "support",
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
      message: result.data.message,
      details: {
        category: result.data.category,
        priority: result.data.priority,
      },
    });

    return NextResponse.json(
      { message: "Support request submitted successfully", inquiry },
      { status: 201 },
    );
  } catch (error) {
    console.error("Support form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
