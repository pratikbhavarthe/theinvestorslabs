import { currentUser } from "@clerk/nextjs/server";

export async function requireAdmin() {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const role = user.publicMetadata?.role;
  if (role !== "admin") {
    throw new Error("Forbidden: Admin access required");
  }

  return user;
}

export async function getCurrentUser() {
  return await currentUser();
}
