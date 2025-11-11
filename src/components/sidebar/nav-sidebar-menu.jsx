import React, { useContext } from "react";
import * as Icons from "lucide-react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { handleScroll } from "@/utils/handle-scroll";
import { BookmarksContext } from "@/contexts/bookmarks-context";

export default function NavSidebarMenu({ items = [] }) {
  const { bookmarks } = useContext(BookmarksContext);

  // Show empty state if no items and no bookmarks
  if (!items.length && !bookmarks.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2 select-none">
        <Icons.CircleSlash className="w-5 h-5" />
        <span className="text-sm font-medium">No data available</span>
      </div>
    );
  }

  return (
    <SidebarMenu>
      {bookmarks.length > 0 && (
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="Favorites" className="space-x-2">
            <button onClick={() => handleScroll("favorites")}>
              <Icons.Star />
              <span>Favorites</span>
              <span className="text-xs text-muted-foreground tabular-nums ml-auto">{bookmarks.length}</span>
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )}

      {items.map((item, index) => {
        const title = item.title;
        const Icon = item.icon;
        const categoryId = title.toLowerCase().replace(/\s+/g, "-");
        const count = item.count;

        return (
          <SidebarMenuItem key={`${title}-${index}`}>
            <SidebarMenuButton asChild tooltip={title} className="space-x-2">
              <button aria-label={title} onClick={() => handleScroll(categoryId)}>
                <Icon />
                <span>{title}</span>
                {count > 0 && <span className="text-xs text-muted-foreground tabular-nums ml-auto">{count}</span>}
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
