import { Boxes } from "lucide-react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

export function NavSidebarHeader() {
  return (
    <SidebarHeader className="border-b">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="space-x-2" tooltip="Home">
            <Link to="/">
              <Boxes />
              <span className="font-semibold">Handpicked</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
