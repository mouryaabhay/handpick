import React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

function NavSidebarMenu({ items = [] }) {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <SidebarMenu>
      {items.map((item) => {
        const IconComponent = item.icon;
        // convert title to match section id
        const sectionId = item.title.toLowerCase().replace(/\s+/g, "-");

        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              onClick={() => handleClick(sectionId)}
            >
              <button aria-label={item.title} className="flex items-center gap-2">
                <IconComponent />
                <span>{item.title}</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}

export default NavSidebarMenu;
