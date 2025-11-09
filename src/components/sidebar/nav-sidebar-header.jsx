import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSidebarHeader() {
  return (
    <SidebarHeader className="border-b">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="Home">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Sparkles className="h-5 w-5 text-amber-500 shrink-0" />
              <span className="truncate group-data-[collapsible=icon]:hidden group-data-[state=collapsed]:hidden">
                Handpicked.dev
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
