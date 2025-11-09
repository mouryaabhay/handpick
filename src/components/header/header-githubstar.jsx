import { githubRepoURL, githubRepo } from "@/constant/global";
import { GitHubStars } from "@/utils/github-stars";
import { Button } from "@/components/ui/button";

export default function HeaderGitHubStars() {
  return (
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
        className="dark:text-foreground flex items-center gap-1"
      >
        <img height="16" width="16" src="src/assets/github.svg" alt="GitHub" />
        <GitHubStars owner={githubRepo.owner} repo={githubRepo.repo} />
      </a>
    </Button>
  );
}
