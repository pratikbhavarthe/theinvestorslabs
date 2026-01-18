import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-20">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-indigo-velvet hover:bg-dark-amethyst transition-all text-[10px] h-11 uppercase tracking-widest font-bold",
            card: "shadow-card border border-dark-amethyst/10 rounded-3xl",
            headerTitle: "text-dark-amethyst font-bold tracking-tight",
            headerSubtitle: "text-dark-amethyst/60",
            socialButtonsBlockButton:
              "border-dark-amethyst/10 text-dark-amethyst hover:bg-surface-muted transition-all",
            formFieldLabel:
              "text-dark-amethyst/60 font-bold uppercase tracking-widest text-[10px]",
            formFieldInput:
              "border-dark-amethyst/10 focus:ring-indigo-velvet rounded-xl h-11",
            footerActionLink:
              "text-indigo-velvet hover:text-dark-amethyst font-bold",
          },
        }}
      />
    </div>
  );
}
