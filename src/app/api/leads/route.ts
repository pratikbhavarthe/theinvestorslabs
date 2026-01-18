import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/types/schemas";
import { createLead } from "@/lib/db/queries";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = leadSchema.parse(body);

    // Create lead in database
    const lead = await createLead(validatedData);

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid input data", details: error },
        { status: 400 }
      );
    }

    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}
