import { useEffect, useState } from "react";
import axios from "axios";

export function GitHubStars({ owner, repo }) {
  const [stars, setStars] = useState("GitHub");

  useEffect(() => {
    async function fetchStars() {
      const cacheKey = `stars_${owner}_${repo}`;
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        setStars(Number(cached));
        return;
      }

      try {
        const baseUrl = import.meta.env.VITE_GITHUB_API;
        if (!baseUrl) throw new Error("VITE_GITHUB_API is not defined");

        const res = await axios.get(baseUrl);
        const data = res.data;

        if (data && typeof data.stargazers_count === "number") {
          const count = data.stargazers_count;
          setStars(count);
          localStorage.setItem(cacheKey, count);
        } else {
          setStars("GitHub");
        }
      } catch (err) {
        console.error("Failed to fetch GitHub stars:", err);
        setStars("GitHub");
      }
    }

    fetchStars();

    const interval = setInterval(() => {
      localStorage.removeItem(`stars_${owner}_${repo}`);
      fetchStars();
    }, 3600 * 1000); // refresh every 1 hour

    return () => clearInterval(interval);
  }, [owner, repo]);

  return <>{typeof stars === "number" ? stars.toLocaleString() : stars}</>;
}
