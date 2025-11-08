import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

function NavSidebarMenu({ items = [] }) {
  return (
    <SidebarMenu>
      {items.map((item) => {
        const IconComponent = item.icon;
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild tooltip={item.title}>
              <Link to={item.url} aria-label={item.title}>
                <IconComponent />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}

export default NavSidebarMenu;
