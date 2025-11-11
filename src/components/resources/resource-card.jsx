import React, { useContext } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { BookmarksContext } from "@/contexts/bookmarks-context";

export default function ResourceCard({
  name,
  url,
  imageUrl,
  subCategory = "New",
  className = "",
}) {
  const { addBookmark, removeBookmark, isBookmarked } = useContext(BookmarksContext);
  const bookmarked = isBookmarked(url);

  const handleBookmark = (e) => {
    e.preventDefault();
    if (bookmarked) {
      removeBookmark(url);
      toast("Bookmark removed", { description: `${name} removed from favorites.` });
    } else {
      addBookmark({ name, url, imageUrl, subCategory });
      toast("Bookmarked!", { description: `${name} added to favorites.` });
    }
  };

  return (
    <Card className="relative rounded hover:shadow-lg transition-shadow cursor-pointer overflow-hidden gap-0 py-0">
      <a href={url} target="_blank" rel="noopener noreferrer" className={`block ${className}`}>
        {/* Image */}
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover bg-muted" loading="lazy" />
        </div>

        {/* Bookmark Button */}
        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            size="icon-sm"
            onClick={handleBookmark}
            title={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
            className={`transition-colors duration-200 ${
              bookmarked
                ? "bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/40 dark:hover:bg-yellow-900/60"
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            <Bookmark
              className={`w-4 h-4 transition-colors duration-200 ${
                bookmarked ? "fill-yellow-500 text-yellow-500" : "fill-transparent text-foreground"
              }`}
              strokeWidth={2}
            />
          </Button>
        </div>

        <CardContent className="px-4 mt-4 mb-2">
          <CardTitle className="text-base font-semibold">{name}</CardTitle>
        </CardContent>

        <div className="px-4 pb-4 flex items-center justify-between">
          <Badge variant="secondary" className="text-xs rounded-full">{subCategory}</Badge>
        </div>
      </a>
    </Card>
  );
}
