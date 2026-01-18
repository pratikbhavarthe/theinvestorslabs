import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { properties } from "@/lib/db/schema";
import { propertyFormSchema } from "@/lib/validations/property";

export async function GET() {
  try {
    const { userId, sessionClaims } = await auth();

    // Verify admin access
    const publicMetadata = sessionClaims?.publicMetadata as
      | { role?: string }
      | undefined;
    const role = publicMetadata?.role;

    if (!userId || role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const allProperties = await db.select().from(properties);

    return NextResponse.json(allProperties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, sessionClaims } = await auth();

    // Verify admin access
    const publicMetadata = sessionClaims?.publicMetadata as
      | { role?: string }
      | undefined;
    const role = publicMetadata?.role;

    if (!userId || role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const body = await request.json();

    // Validate request body
    const result = propertyFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.issues },
        { status: 400 },
      );
    }

    // Insert property into database
    const [newProperty] = await db
      .insert(properties)
      .values(result.data)
      .returning();

    return NextResponse.json(newProperty, { status: 201 });
  } catch (error) {
    console.error("Error creating property:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
