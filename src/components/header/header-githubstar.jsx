import { handpickedProjectDetails } from "@/constant/global";
import { GitHubStars } from "@/utils/github-stars";
import { Button } from "@/components/ui/button";
import githubIcon from "@/assets/icons/github.svg";

export default function HeaderGitHubButton() {
  const { repoOwner, repoName } = handpickedProjectDetails;

  return (
    <Button asChild variant="outline" className="hidden sm:flex">
      <a
        href={`https://github.com/${repoOwner}/${repoName}`}
        rel="noopener noreferrer"
        target="_blank"
        className="dark:text-foreground flex items-center gap-1"
      >
        <img
          height="16"
          width="16"
          src={githubIcon}
          alt="GitHub"
          className="invert-0 dark:invert transition-all"
        />

        <GitHubStars repoOwner={repoOwner} repoName={repoName} />
      </a>
    </Button>
  );
}
