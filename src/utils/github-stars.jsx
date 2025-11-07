import { useEffect, useState } from "react";
import axios from "axios";

export function GitHubStars({ owner, repo }) {
  const [stars, setStars] = useState("GitHub");

  useEffect(() => {
    async function fetchStars() {
      try {
        const baseUrl = process.env.REACT_APP_GITHUB_API; // notice REACT_APP_
        if (!baseUrl) throw new Error("REACT_APP_GITHUB_API is not defined");

        const res = await axios.get(`${baseUrl}/repos/${owner}/${repo}`);
        const data = res.data;

        if (data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        } else {
          setStars("GitHub");
        }
      } catch (err) {
        console.error("Failed to fetch GitHub stars:", err);
        setStars("GitHub");
      }
    }

    fetchStars();

    const interval = setInterval(fetchStars, 3600 * 1000); // refresh every 1 hour
    return () => clearInterval(interval);
  }, [owner, repo]);

  return <>{typeof stars === "number" ? stars.toLocaleString() : stars}</>;
}
