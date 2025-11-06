import React from "react";
import * as Icons from "lucide-react";

import resources from "@/data/resources.json";
import { NavSidebarHeader } from "./nav-sidebar-header";
import { NavSidebarFooter } from "./nav-sidebar-footer";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSidebarLayout() {
  // Convert categories array to menu items
  const menuItems = resources.categories.map((category) => ({
    title: category.name,
    url: `/resources/${encodeURIComponent(
      category.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
    )}`,
    icon: Icons[category.icon] || Icons.Folder,
  }));

  // Bottom group items
  const bottomItems = [
    { title: "Search", url: "/search", icon: Icons.Search },
    { title: "Settings", url: "/settings", icon: Icons.Settings },
  ];

  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <NavSidebarHeader />

      {/* Main scrollable content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Bottom group */}
      <div className="mt-auto">
        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <NavSidebarFooter />
      </div>
    </Sidebar>
  );
}
