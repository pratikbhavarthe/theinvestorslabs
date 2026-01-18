import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-dust-grey/20">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-dark-amethyst/60">{title}</p>
          <p className="mt-2 text-3xl font-bold text-dark-amethyst">{value}</p>
          {description && (
            <p className="mt-1 text-sm text-dark-amethyst/50">{description}</p>
          )}
          {trend && (
            <p
              className={`mt-2 text-sm font-medium ${
                trend.isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {trend.isPositive ? "+" : ""}
              {trend.value}% from last month
            </p>
          )}
        </div>
        <div className="rounded-full bg-indigo-velvet/10 p-3">
          <Icon className="h-6 w-6 text-indigo-velvet" />
        </div>
      </div>
    </div>
  );
}
