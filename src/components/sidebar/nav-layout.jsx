import React, { useContext } from "react";
import * as Icons from "lucide-react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { ResourceProviderContext } from "@/contexts/resource-context";
import { NavSidebarHeader } from "./nav-sidebar-header";
import NavSidebarSection from "./nav-sidebar-section";
import NavSidebarMenu from "./nav-sidebar-menu";
import { NavSidebarFooter } from "./nav-sidebar-footer";

function NavSidebarLayout() {
  const resources = useContext(ResourceProviderContext);

  if (!resources?.categories?.length) {
    return (
      <div className="m-2 text-muted-foreground">No resources available</div>
    );
  }

  const formatUrl = (name) =>
    `/${encodeURIComponent(
      name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
    )}`;

  const menuItems = resources.categories.map((category) => ({
    title: category.name,
    url: formatUrl(category.name),
    icon: Icons[category.icon] || Icons.Folder,
  }));

  return (
    <Sidebar collapsible="icon">
      <NavSidebarHeader />

      <SidebarContent className="overflow-x-hidden">
        <NavSidebarSection>
          <NavSidebarMenu items={menuItems} />
        </NavSidebarSection>
      </SidebarContent>

      <NavSidebarFooter />
    </Sidebar>
  );
}

export default NavSidebarLayout;
