import { NextRequest, NextResponse } from "next/server";
import { supportFormSchema } from "@/lib/validations/support";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side validation
    const result = supportFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.errors },
        { status: 400 },
      );
    }

    // Log the submission (in production, this would save to database)
    console.log("Support request received:", result.data);

    // TODO: Save to database
    // TODO: Send email notification to support team
    // TODO: Send confirmation email to user
    // TODO: Create support ticket

    return NextResponse.json(
      { message: "Support request submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Support form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
