import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
// Check if user has admin role in public metadata
// const publicMetadata = sessionClaims?.publicMetadata as
//   | { role?: string }
//   | undefined;
// const role = publicMetadata?.role;

export default clerkMiddleware(async (auth, req) => {
  // Protect admin routes
  if (isAdminRoute(req)) {
    const { userId, sessionClaims } = await auth();

    // Redirect to sign-in if not authenticated
    if (!userId) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }

    // Check if user has admin role in public metadata
    const publicMetadata = sessionClaims?.publicMetadata as
      | { role?: string }
      | undefined;
    const role = publicMetadata?.role;
    // const email = sessionClaims?.email as string | undefined;

    // Optional: You can keep a basic role check if you want, but since sessionClaims might be missing email,
    // we will rely on the page-level check for strict enforcement.
    // If you want to block non-admins strictly at middleware level, you need to ensure claims are correct.
    // For now, we allow authenticated users to reach the page, where requireAdmin() will strict check them.

    // if (role !== "admin" && (!email || !ADMIN_EMAILS.includes(email))) {
    //   // Redirect non-admin users to home page
    //   return NextResponse.redirect(new URL("/", req.url));
    // }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
