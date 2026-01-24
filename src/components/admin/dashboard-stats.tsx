import {
  Building2,
  Users,
  MessageSquare,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  UserPlus,
  Activity,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardStatsProps {
  stats: {
    totalProperties: number;
    activeListings: number;
    soldProperties: number;
    totalLeads: number;
    totalInquiries: number;
    totalAssetValue: number;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value={formatCurrency(stats.totalAssetValue || 0)}
        icon={<Wallet className="h-4 w-4 text-brand-primary" />}
        subtext="+20.1% from last month"
      />
      <StatCard
        title="Active Listings"
        value={stats.activeListings.toString()}
        icon={<Building2 className="h-4 w-4 text-brand-primary" />}
        subtext="+180.1% from last month"
      />
      <StatCard
        title="Total Leads"
        value={stats.totalLeads.toString()}
        icon={<UserPlus className="h-4 w-4 text-brand-primary" />}
        subtext="+19% from last month"
      />
      <StatCard
        title="Active Now"
        value={stats.totalInquiries.toString()}
        icon={<Activity className="h-4 w-4 text-brand-primary" />}
        subtext="+201 since last hour"
      />
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  subtext?: string;
}

function StatCard({ title, value, icon, subtext }: StatCardProps) {
  return (
    <Card className="border-dust-grey/20 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-dark-amethyst">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-dark-amethyst">{value}</div>
        <p className="text-xs text-dark-amethyst/60 mt-1">{subtext}</p>
      </CardContent>
    </Card>
  );
}
