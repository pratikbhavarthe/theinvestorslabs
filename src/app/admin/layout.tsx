import { AppSidebar } from "@/components/app-sidebar";
import { AdminBreadcrumbs } from "@/components/admin/admin-breadcrumbs";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { requireAdmin } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <SidebarProvider className="bg-honeydew/20">
      <AppSidebar variant="inset" />
      <SidebarInset className="bg-muted/20">
        <AdminBreadcrumbs />
        <main className="flex flex-1 flex-col overflow-x-hidden p-6 md:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
