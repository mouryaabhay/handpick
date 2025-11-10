import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import HeaderCurrentSection from "./header-current-section";
import HeaderSearchbar from "./header-searchbar";
import HeaderGitHubButton from "./header-githubstar";
import { ThemeToggle } from "@/components/themes/theme-toggle";

export default function AppHeader() {
  return (
    <header className="flex justify-between py-2 h-(--header-height) shrink-0 items-center gap-2 border-b px-4 lg:px-6">
      <div className="flex items-center gap-2 h-full">
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="mx-2 h-1" />

        <HeaderCurrentSection className="text-base font-medium" />
      </div>

      <div className="flex items-center gap-2 h-full">
        <HeaderSearchbar />

        <Separator orientation="vertical" className="mx-2 h-1" />

        <HeaderGitHubButton />

        <Separator orientation="vertical" className="mx-2 h-1" />

        <ThemeToggle />
      </div>
    </header>
  );
}
