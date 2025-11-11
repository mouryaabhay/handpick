import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import HeaderGitHubButton from "./header-github-button";
import { ThemeToggle } from "@/components/themes/theme-toggle";
import { RandomZinger } from "../other/random-zingger";

export default function AppHeader() {
  return (
    <header className="flex justify-between py-2 h-(--header-height) shrink-0 items-center gap-2 border-b px-4 lg:px-6">
      <div className="flex items-center gap-2 h-full">
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="mx-2 h-1" />

        <RandomZinger interval={15000} />
      </div>

      <div className="flex items-center gap-2 h-full">
        <HeaderGitHubButton />

        <Separator orientation="vertical" className="mx-2 h-1" />

        <ThemeToggle />
      </div>
    </header>
  );
}
