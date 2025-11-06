import { useEffect, useState } from "react";

export function GitHubStars({ owner, repo }) {
  const [stars, setStars] = useState("GitHub");

  useEffect(() => {
    async function fetchStars() {
      try {
        // const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        const res = "Github";
        const data = await res.json();
        if (data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        } else {
          setStars("GitHub");
        }
      } catch {
        setStars("GitHub");
      }
    }

    fetchStars();
    const interval = setInterval(fetchStars, 3600 * 1000); // refresh every 1 hour

    return () => clearInterval(interval);
  }, [owner, repo]);

  // return formatted count or placeholder
  return <>{stars ? stars.toLocaleString() : "GitHub"}</>;
}
