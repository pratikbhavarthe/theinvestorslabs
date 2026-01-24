import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ActivityItem {
  id: string;
  type: string;
  name: string;
  message: string | null;
  date: Date;
}

interface RecentActivityTableProps {
  activities: ActivityItem[];
}

export function RecentActivityTable({ activities }: RecentActivityTableProps) {
  return (
    <Card className="col-span-3 border-dust-grey/20 shadow-sm">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest interactions from your platform.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.length === 0 ? (
            <div className="text-center text-sm text-muted-foreground py-8">
              No recent activity
            </div>
          ) : (
            activities.slice(0, 5).map((activity) => (
              <div key={activity.id} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="" alt="Avatar" />
                  <AvatarFallback className="bg-brand-primary/10 text-brand-primary font-bold">
                    {activity.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-dark-amethyst">
                    {activity.name}
                  </p>
                  <p className="text-sm text-muted-foreground w-[200px] truncate">
                    {activity.message || "No message provided"}
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  <Badge
                    variant="outline"
                    className={`
                                    border-none
                                    ${activity.type === "Lead" ? "text-brand-accent bg-brand-accent/10" : "text-brand-primary bg-brand-primary/10"}
                                `}
                  >
                    {activity.type === "Lead" ? "New Lead" : "Inquiry"}
                  </Badge>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
