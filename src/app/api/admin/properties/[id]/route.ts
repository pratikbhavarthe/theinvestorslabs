import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { properties } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { propertyFormSchema } from "@/lib/validations/property";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { userId, sessionClaims } = await auth();

    const publicMetadata = sessionClaims?.publicMetadata as
      | { role?: string }
      | undefined;
    const role = publicMetadata?.role;

    if (!userId || role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const [property] = await db
      .select()
      .from(properties)
      .where(eq(properties.id, params.id));

    if (!property) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(property);
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { userId, sessionClaims } = await auth();

    const publicMetadata = sessionClaims?.publicMetadata as
      | { role?: string }
      | undefined;
    const role = publicMetadata?.role;

    if (!userId || role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const body = await request.json();
    const result = propertyFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.issues },
        { status: 400 },
      );
    }

    const [updatedProperty] = await db
      .update(properties)
      .set({ ...result.data, updatedAt: new Date() })
      .where(eq(properties.id, params.id))
      .returning();

    if (!updatedProperty) {
      return NextResponse.json(
        { error: "Property not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(updatedProperty);
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { userId, sessionClaims } = await auth();

    const publicMetadata = sessionClaims?.publicMetadata as
      | { role?: string }
      | undefined;
    const role = publicMetadata?.role;

    if (!userId || role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await db.delete(properties).where(eq(properties.id, params.id));

    return NextResponse.json({ message: "Property deleted successfully" });
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
