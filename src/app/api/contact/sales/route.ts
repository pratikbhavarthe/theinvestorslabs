import { NextRequest, NextResponse } from "next/server";
import { salesFormSchema } from "@/lib/validations/sales";
import { createInquiry } from "@/lib/db/queries";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side validation
    const result = salesFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.issues },
        { status: 400 },
      );
    }

    // Save to database
    const inquiry = await createInquiry({
      type: "sales",
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
      message: result.data.message,
      details: {
        company: result.data.company,
        interest: result.data.interest,
      },
    });

    return NextResponse.json(
      { message: "Sales inquiry submitted successfully", inquiry },
      { status: 201 },
    );
  } catch (error) {
    console.error("Sales form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
