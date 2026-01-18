import Link from "next/link";
import {
  Building2,
  Mail,
  TrendingUp,
  CheckCircle,
  Plus,
  Users,
  ArrowUpRight,
  Settings,
  ShieldCheck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function AdminDashboard() {
  // TODO: Fetch real data from database
  const stats = [
    {
      title: "Active Portfolio",
      value: "24",
      description: "Across Noida & Greater Noida",
      icon: Building2,
      trend: "+2.5%",
      trendPositive: true,
    },
    {
      title: "Available listings",
      value: "18",
      description: "Market ready",
      icon: TrendingUp,
      trend: "+12%",
      trendPositive: true,
    },
    {
      title: "Completed sales",
      value: "6",
      description: "Total revenue generated",
      icon: CheckCircle,
      trend: "+4.3%",
      trendPositive: true,
    },
    {
      title: "Verified Leads",
      value: "142",
      description: "High intent buyers",
      icon: Mail,
      trend: "+8%",
      trendPositive: true,
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 md:gap-10 md:p-10 transition-all">
      {/* Editorial Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-dust-grey/10 pb-10">
        <div className="space-y-2">
          <Badge className="bg-indigo-velvet/5 text-indigo-velvet hover:bg-indigo-velvet/5 border-indigo-velvet/10 font-bold tracking-widest uppercase text-[10px] px-3">
            Admin Intelligence
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-dark-amethyst md:text-5xl">
            Executive Summary
          </h1>
          <p className="text-lg text-dark-amethyst/50 max-w-2xl">
            Real-time performance metrics and strategic operational overview for
            The Investor Labs properties.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-dust-grey/20 hover:bg-honeydew/20 text-dark-amethyst font-medium h-12 px-6 rounded-xl"
          >
            <Settings className="mr-2 h-4 w-4" />
            System Settings
          </Button>
          <Button
            asChild
            className="bg-indigo-velvet hover:bg-dark-amethyst text-white font-semibold h-12 px-8 rounded-xl shadow-xl shadow-indigo-velvet/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Link href="/admin/properties/new">
              <Plus className="mr-2 h-5 w-5" /> Add New Asset
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="group relative bg-white shadow-sm hover:shadow-xl transition-all duration-300 border-dust-grey/20 overflow-hidden rounded-2xl"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-dark-amethyst/40">
                {stat.title}
              </CardTitle>
              <div className="rounded-full bg-indigo-velvet/5 p-2 group-hover:bg-indigo-velvet group-hover:text-white transition-colors duration-300">
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-dark-amethyst">
                {stat.value}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-xs font-bold ${stat.trendPositive ? "text-green-600" : "text-red-600"}`}
                >
                  {stat.trend}
                </span>
                <span className="text-xs text-dark-amethyst/30 font-medium">
                  {stat.description}
                </span>
              </div>
            </CardContent>
            {/* Subtle brand hit on hover */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-velvet group-hover:w-full transition-all duration-500" />
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Quick Management Section */}
        <Card className="lg:col-span-2 bg-white shadow-sm border-dust-grey/20 rounded-2xl">
          <CardHeader className="flex flex-row items-center border-b border-dust-grey/10 pb-6 mb-6">
            <div className="grid gap-1">
              <CardTitle className="text-2xl font-bold text-dark-amethyst">
                Strategic Actions
              </CardTitle>
              <CardDescription className="text-dark-amethyst/50">
                Direct access to high-priority management workflows.
              </CardDescription>
            </div>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="ml-auto text-indigo-velvet font-bold hover:bg-indigo-velvet/10"
            >
              <Link href="/admin/properties">
                Explore Portfolio
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/admin/properties/new"
                className="flex items-center gap-5 rounded-2xl border border-dust-grey/10 bg-honeydew/5 p-6 transition-all hover:bg-white hover:border-indigo-velvet hover:shadow-lg group"
              >
                <div className="rounded-xl bg-indigo-velvet/10 p-3 group-hover:bg-indigo-velvet transition-colors duration-300">
                  <Plus className="h-6 w-6 text-indigo-velvet group-hover:text-white" />
                </div>
                <div>
                  <p className="font-bold text-dark-amethyst group-hover:text-indigo-velvet transition-colors">
                    List New Property
                  </p>
                  <p className="text-sm text-dark-amethyst/50 mt-1">
                    Start a high-conversion listing
                  </p>
                </div>
              </Link>
              <Link
                href="/admin/leads"
                className="flex items-center gap-5 rounded-2xl border border-dust-grey/10 bg-honeydew/5 p-6 transition-all hover:bg-white hover:border-indigo-velvet hover:shadow-lg group"
              >
                <div className="rounded-xl bg-indigo-velvet/10 p-3 group-hover:bg-indigo-velvet transition-colors duration-300">
                  <Users className="h-6 w-6 text-indigo-velvet group-hover:text-white" />
                </div>
                <div>
                  <p className="font-bold text-dark-amethyst group-hover:text-indigo-velvet transition-colors">
                    Client Acquisitions
                  </p>
                  <p className="text-sm text-dark-amethyst/50 mt-1">
                    Review verified inquiries
                  </p>
                </div>
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center gap-5 rounded-2xl border border-dust-grey/10 bg-honeydew/5 p-6 transition-all hover:bg-white hover:border-indigo-velvet hover:shadow-lg group"
              >
                <div className="rounded-xl bg-indigo-velvet/10 p-3 group-hover:bg-indigo-velvet transition-colors duration-300">
                  <ShieldCheck className="h-6 w-6 text-indigo-velvet group-hover:text-white" />
                </div>
                <div>
                  <p className="font-bold text-dark-amethyst group-hover:text-indigo-velvet transition-colors">
                    Security & Roles
                  </p>
                  <p className="text-sm text-dark-amethyst/50 mt-1">
                    Manage system permissions
                  </p>
                </div>
              </Link>
              <Link
                href="/admin/leads"
                className="flex items-center gap-5 rounded-2xl border border-dust-grey/10 bg-honeydew/5 p-6 transition-all hover:bg-white hover:border-indigo-velvet hover:shadow-lg group"
              >
                <div className="rounded-xl bg-indigo-velvet/10 p-3 group-hover:bg-indigo-velvet transition-colors duration-300">
                  <Mail className="h-6 w-6 text-indigo-velvet group-hover:text-white" />
                </div>
                <div>
                  <p className="font-bold text-dark-amethyst group-hover:text-indigo-velvet transition-colors">
                    Support Channels
                  </p>
                  <p className="text-sm text-dark-amethyst/50 mt-1">
                    Manage broker partnerships
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Status / News Feed */}
        <Card className="bg-white shadow-sm border-dust-grey/20 rounded-2xl h-full">
          <CardHeader className="border-b border-dust-grey/10 pb-6 mb-6">
            <CardTitle className="text-2xl font-bold text-dark-amethyst">
              Recent Activity
            </CardTitle>
            <CardDescription className="text-dark-amethyst/50">
              Latest marketplace movements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="relative mb-6">
                <div className="absolute -inset-4 rounded-full bg-indigo-velvet/5 animate-pulse" />
                <div className="relative rounded-full bg-honeydew p-6 border border-dust-grey/20 shadow-inner">
                  <Mail className="h-10 w-10 text-dust-grey" />
                </div>
              </div>
              <p className="text-lg font-bold text-dark-amethyst">
                No New Alerts
              </p>
              <p className="text-sm text-dark-amethyst/40 mt-2 max-w-[220px] mx-auto">
                Once users start interacting with your properties, their
                inquiries will appear here as live feed.
              </p>
              <Button
                variant="outline"
                className="mt-8 border-indigo-velvet/20 text-indigo-velvet hover:bg-indigo-velvet/5 hover:text-indigo-velvet px-8 rounded-xl font-bold"
              >
                Refresh Feed
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
