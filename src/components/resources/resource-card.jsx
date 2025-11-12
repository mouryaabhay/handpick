import React, { useContext } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BookmarksContext } from "@/contexts/bookmarks-context";
import ResourceTags from "@/components/resources/resource-tags";

export default function ResourceCard({
  name,
  url,
  imageUrl,
  tags = [],
  badges = [],
}) {
  const { addBookmark, removeBookmark, isBookmarked } =
    useContext(BookmarksContext);
  const bookmarked = isBookmarked(url);

  const handleBookmark = (e) => {
    e.preventDefault();
    if (bookmarked) {
      removeBookmark(url);
      toast("Bookmark removed", {
        description: `${name} removed from favorites.`,
      });
    } else {
      addBookmark({ name, url, imageUrl, tags, badges });
      toast("Bookmarked!", { description: `${name} added to favorites.` });
    }
  };

  return (
    <Card className="relative rounded-lg hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full w-full p-0">
      {/* Bookmark */}
      <Button
        size="icon-sm"
        onClick={handleBookmark}
        title={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
        className={`absolute top-3 right-3 transition-colors duration-200 ${
          bookmarked
            ? "bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/40 dark:hover:bg-yellow-900/60"
            : "bg-secondary hover:bg-secondary/80"
        }`}
      >
        <Bookmark
          className={`transition-colors duration-200 ${
            bookmarked
              ? "fill-yellow-500 text-yellow-500"
              : "fill-transparent text-foreground"
          }`}
        />
      </Button>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full"
      >
        {/* Image */}
        <CardContent className="w-full rounded-lg p-2 aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover bg-muted rounded"
            loading="lazy"
          />
        </CardContent>

        {/* Content */}
        <div className="p-4 flex flex-1 flex-col gap-4 justify-start">
          <CardTitle className="text-base font-semibold">{name}</CardTitle>
          <ResourceTags tags={tags} badges={badges} />
        </div>
      </a>
    </Card>
  );
}
