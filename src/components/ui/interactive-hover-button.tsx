import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full p-4 px-10 text-center font-bold transition-all duration-300",
        className,
      )}
      {...props}
    >
      {/* Background Expansion Circle - Positioned Left (Subtle) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-current transition-all duration-300 ease-out group-hover:scale-[100] group-hover:bg-brand-accent z-0"></div>

      <div className="relative z-10 flex items-center justify-center gap-2">
        <span className="inline-block text-current transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 uppercase tracking-widest text-[10px] ml-2">
          {children}
        </span>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 text-white opacity-0 transition-all duration-300 -translate-x-12 group-hover:translate-x-0 group-hover:opacity-100">
        <span className="uppercase tracking-widest text-[10px] font-bold">
          {children}
        </span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  );
}
