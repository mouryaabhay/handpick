import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

function NavSidebarSection({ children, className = "" }) {
  return (
    <SidebarGroup className={className}>
      <SidebarGroupContent>{children}</SidebarGroupContent>
    </SidebarGroup>
  );
}

export default NavSidebarSection;
