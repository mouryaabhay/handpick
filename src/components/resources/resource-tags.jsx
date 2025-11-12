import React from "react";
import { Badge } from "@/components/ui/badge";
import { CardFooter } from "../ui/card";

// Map badge types to custom Tailwind styles
const BADGE_STYLES = {
  new: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400",
  featured: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400",
  popular: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400",
};

export default function ResourceTags({ tags = [], badges = [] }) {
  return (
    <CardFooter className="flex flex-wrap gap-2 items-center p-0">
      {/* Render all tags (default secondary style) */}
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="text-xs rounded-full"
        >
          {tag}
        </Badge>
      ))}

      {/* Render all badges with custom colors */}
      {badges.map((badge) => {
        if (!badge) return null;
        const style = BADGE_STYLES[badge.toLowerCase()] || "bg-gray-100 text-gray-800 dark:bg-gray-900/40 dark:text-gray-400";
        const displayText = badge.charAt(0).toUpperCase() + badge.slice(1);

        return (
          <Badge
            key={badge}
            className={`text-xs rounded-full ${style}`}
          >
            {displayText}
          </Badge>
        );
      })}
    </CardFooter>
  );
}
