import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { githubRepoURL, githubRepo } from "@/constant/global";
import { GitHubStars } from "@/utils/github-stars";

export function SiteHeader() {
  return (
    <header className="flex py-2 h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />

        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <h1 className="text-base font-medium">Resources</h1>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            asChild
            size="sm"
            className="github hidden sm:flex"
          >
            <a
              href={githubRepoURL}
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              <img height="16" width="16" src="src/assets/github.svg" alt="GitHub" />
              <GitHubStars owner={githubRepo.owner} repo={githubRepo.repo} />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
