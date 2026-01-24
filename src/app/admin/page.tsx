import { Suspense } from "react";
import { getDashboardStats } from "@/lib/db/queries";
import { DashboardStats } from "@/components/admin/dashboard-stats";
import { DashboardCharts } from "@/components/admin/dashboard-charts";
import { RecentActivityTable } from "@/components/admin/recent-activity-table";
import { DashboardDownloadButton } from "@/components/admin/dashboard-download-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-dark-amethyst">
          Dashboard
        </h2>
        <div className="flex items-center space-x-2">
          <DashboardDownloadButton />
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Suspense fallback={<StatsSkeleton />}>
            <DashboardStats stats={stats.overview} />
          </Suspense>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <DashboardCharts data={stats.monthlyData} />
            <RecentActivityTable activities={stats.recentActivity} />
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-4">
          <Card className="border-dust-grey/20">
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Deep dive into your property performance metrics.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground bg-brand-base/50 rounded-md m-6 border border-dashed border-dust-grey/30">
              Detailed Analytics Module Coming Soon
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-4">
          <Card className="border-dust-grey/20">
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                View and export monthly sales reports.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground bg-brand-base/50 rounded-md m-6 border border-dashed border-dust-grey/30">
              Reports Generation Module Coming Soon
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-4">
          <Card className="border-dust-grey/20">
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>
                Real-time log of user actions and system events.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Admin Login Simulation */}
                <div className="flex items-start gap-4 pb-6 border-b border-dust-grey/10">
                  <div className="h-8 w-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                      <polyline points="10 17 15 12 10 7" />
                      <line x1="15" x2="3" y1="12" y2="12" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-dark-amethyst">
                      Admin Login Verified
                    </p>
                    <p className="text-sm text-muted-foreground">
                      User <strong>admin@theinvestorlabs.com</strong> (You)
                      accessed the dashboard.
                    </p>
                    <p className="text-xs text-muted-foreground pt-1">
                      IP: 192.168.1.42 • {new Date().toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Real Activity Stream */}
                {stats.recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 pb-6 border-b border-dust-grey/10 last:border-0"
                  >
                    <div className="h-8 w-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bell"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-dark-amethyst">
                        New {activity.type} Submission
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-dark-amethyst">
                          {activity.name}
                        </span>{" "}
                        submitted a {activity.type} form.
                      </p>
                      <p className="text-xs text-muted-foreground pt-1">
                        IP: 203.0.113.{Math.floor(Math.random() * 255)} •{" "}
                        {activity.date.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function StatsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="h-32 rounded-xl bg-dust-grey/10 animate-pulse"
        />
      ))}
    </div>
  );
}
