import React from "react";
import * as Icons from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { handleScroll } from "@/utils/handle-scroll";

export default function NavSidebarMenu({ items = [] }) {
  // Show empty state if there’s no data
  if (!items.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2 select-none">
        <Icons.CircleSlash className="w-5 h-5" />
        <span className="text-sm font-medium">No data available</span>
      </div>
    );
  }

  return (
    <SidebarMenu>
      {items.map((item, index) => {
        const title = item.title;
        const Icon = item.icon;
        const categoryId = title.toLowerCase().replace(/\s+/g, "-");
        const count = item.count;

        return (
          <SidebarMenuItem key={`${title}-${index}`}>
            <SidebarMenuButton asChild tooltip={title} className="space-x-2">
              <button
                aria-label={title}
                className="flex w-full items-center"
                onClick={() => handleScroll(categoryId)}
              >
                <Icon />
                <span>{title}</span>

                {count > 0 && (
                  <span className="text-xs text-muted-foreground tabular-nums ml-auto">
                    {count}
                  </span>
                )}
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
