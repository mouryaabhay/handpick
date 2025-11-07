import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Icons from "lucide-react";

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

const RESOURCES_URL =
  "https://raw.githubusercontent.com/mouryaabhay/handpicked/refs/heads/main/src/data/resources.json";

export function NavSidebarLayout() {
  const [resources, setResources] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(RESOURCES_URL)
      .then((response) => {
        setResources(response.data);
      })
      .catch((err) => {
        console.error("Failed to load resources:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!resources) return <div>Failed to load resources</div>;

  const menuItems = resources.categories.map((category) => ({
    title: category.name,
    url: `/resources/${encodeURIComponent(
      category.name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
    )}`,
    icon: Icons[category.icon] || Icons.Folder,
  }));

  const bottomItems = [
    { title: "Search", url: "/search", icon: Icons.Search },
    { title: "Settings", url: "/settings", icon: Icons.Settings },
  ];

  return (
    <Sidebar collapsible="icon">
      <NavSidebarHeader />

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

        <NavSidebarFooter />
      </div>
    </Sidebar>
  );
}
