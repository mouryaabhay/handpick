import React from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

function NavSidebarSection({ title, children, className = "" }) {
  return (
    <SidebarGroup className={className}>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarGroupContent>{children}</SidebarGroupContent>
    </SidebarGroup>
  );
}

export default NavSidebarSection;
