import React from "react";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";

function NavSidebarGroup({ children }) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupContent>{children}</SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}

export default NavSidebarGroup;
