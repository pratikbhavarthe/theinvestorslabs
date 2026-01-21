import { NextRequest, NextResponse } from "next/server";
import { salesFormSchema } from "@/lib/validations/sales";

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

    // Log the submission (in production, this would save to database)
    console.log("Sales inquiry received:", result.data);

    // TODO: Save to database
    // TODO: Send email notification to sales team
    // TODO: Send confirmation email to user

    return NextResponse.json(
      { message: "Sales inquiry submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Sales form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
