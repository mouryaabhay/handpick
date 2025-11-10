import { Sparkles } from "lucide-react";

import { SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

export function NavSidebarFooter() {
  return (
    <SidebarFooter className="border-t">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="Account">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Sparkles className="h-5 w-5 text-amber-500 shrink-0" />
              <span className="truncate group-data-[collapsible=icon]:hidden group-data-[state=collapsed]:hidden">
                Placeholder
              </span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
