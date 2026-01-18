import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento transition-all duration-300 shadow-sm p-8 bg-white border border-dust-grey/30 hover:border-indigo-velvet/40 hover:shadow-2xl hover:shadow-indigo-velvet/10 justify-between flex flex-col space-y-4 relative overflow-hidden",
        className,
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-velvet/0 via-indigo-velvet/0 to-indigo-velvet/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 rounded-3xl" />

      {/* Content */}
      <div className="relative z-10">
        {header}
        <div className="group-hover/bento:translate-x-1 transition-transform duration-300">
          {icon && (
            <div className="mb-4 w-12 h-12 rounded-2xl bg-indigo-velvet/10 group-hover/bento:bg-indigo-velvet/20 flex items-center justify-center transition-all duration-300 group-hover/bento:scale-110">
              {icon}
            </div>
          )}
          <div className="font-sans font-bold text-dark-amethyst text-xl mb-2 group-hover/bento:text-indigo-velvet transition-colors duration-300">
            {title}
          </div>
          <div className="font-sans font-normal text-dark-amethyst/70 text-base leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
