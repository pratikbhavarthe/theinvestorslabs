"use client";

import { useUser, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SaveSearchButton() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <Button
          variant="outline"
          className="rounded-full h-10 px-5 font-bold text-sm bg-white text-ink-navy hover:bg-off-white border-cool-gray shadow-none flex items-center gap-2 transition-all hover:border-realty-blue/50"
        >
          <Heart className="h-4 w-4" />
          <span>My Wishlist</span>
        </Button>
      </SignInButton>
    );
  }

  return (
    <Link href="/wishlist">
      <Button
        variant="outline"
        className="rounded-full h-10 px-5 font-bold text-sm bg-white text-ink-navy hover:bg-off-white border-cool-gray shadow-none flex items-center gap-2 transition-all hover:text-realty-blue hover:border-realty-blue/50"
      >
        <Heart className="h-4 w-4" />
        <span>My Wishlist</span>
      </Button>
    </Link>
  );
}
