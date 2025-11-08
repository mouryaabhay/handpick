import React, { useContext } from "react";
import * as Icons from "lucide-react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { ResourceContext } from "@/contexts/ContextHub";
import { NavSidebarHeader } from "./nav-sidebar-header";
import { NavSidebarFooter } from "./nav-sidebar-footer";
import NavSidebarSection from "./nav-sidebar-section";
import NavSidebarMenu from "./nav-sidebar-menu";

function NavSidebarLayout() {
  const resources = useContext(ResourceContext);

  if (!resources?.categories?.length) {
    return <div className="m-2 text-muted-foreground">No resources available</div>;
  }

  const formatUrl = (name) =>
    `/resources/${encodeURIComponent(
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
        <NavSidebarSection title="Resources">
          <NavSidebarMenu items={menuItems} />
        </NavSidebarSection>
      </SidebarContent>

      <NavSidebarFooter />
    </Sidebar>
  );
}

export default NavSidebarLayout;
