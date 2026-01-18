import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function SiteHeader() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-dark-amethyst/10 bg-white/80 backdrop-blur-sm sticky top-0 z-10 transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-2 px-4 md:px-6">
        <SidebarTrigger className="-ml-1 text-dark-amethyst" />
        <Separator
          orientation="vertical"
          className="mx-2 h-4 bg-dark-amethyst/10"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink
                href="/admin"
                className="text-dark-amethyst/60 hover:text-dark-amethyst"
              >
                Admin
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block text-dark-amethyst/30" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-dark-amethyst font-medium">
                Dashboard
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
