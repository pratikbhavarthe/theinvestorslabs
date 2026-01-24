
"use client";

import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import { Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useWishlist } from "@/context/wishlist-context";
import { PropertyCardHorizontal } from "@/components/property/property-card-horizontal";

export default function WishlistPage() {
  const { isSignedIn, isLoaded } = useUser();
  const { wishlist } = useWishlist();

  if (!isLoaded) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center bg-off-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-cool-gray/30 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-cool-gray/30 rounded"></div>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="min-h-screen bg-off-white pt-10 pb-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-red-50 rounded-full">
            <Heart className="w-6 h-6 text-red-600 fill-red-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-ink-navy">
            My Wishlist ({wishlist.length})
          </h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-cool-gray/20 shadow-sm flex flex-col items-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-slate-300" />
            </div>
            <h2 className="text-xl font-semibold text-ink-navy mb-2">
              No saved properties
            </h2>
            <p className="text-slate-gray max-w-md mx-auto mb-8">
              You haven&apos;t saved any properties to your wishlist yet. Start
              exploring to find your dream property.
            </p>
            <Link href="/properties">
              <Button className="bg-realty-blue hover:bg-[#1749C9] text-white px-8 h-12 rounded-full font-bold shadow-lg shadow-realty-blue/20 transition-all hover:scale-[1.02] flex items-center gap-2">
                <Search className="w-4 h-4" />
                Browse Properties
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {wishlist.map((property) => (
              <PropertyCardHorizontal key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
