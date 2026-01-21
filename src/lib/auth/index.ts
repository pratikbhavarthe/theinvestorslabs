import { currentUser } from "@clerk/nextjs/server";

const ADMIN_EMAILS = ["pratikbhavarthee1998@gmail.com"];

export async function requireAdmin() {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const role = user.publicMetadata?.role;
  const email = user.emailAddresses[0]?.emailAddress;

  if (role !== "admin" && !ADMIN_EMAILS.includes(email)) {
    throw new Error("Forbidden: Admin access required");
  }

  return user;
}

export async function getCurrentUser() {
  return await currentUser();
}
