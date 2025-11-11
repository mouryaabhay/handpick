import React, { useContext, useMemo } from "react";
import { ResourcesProviderContext } from "@/contexts/resources-context";
import { BookmarksContext } from "@/contexts/bookmarks-context";
import { Separator } from "@/components/ui/separator";
import ResourceCard from "./resource-card";

export default function ResourcesList({ query = "" }) {
  const { categories } = useContext(ResourcesProviderContext);
  const { bookmarks } = useContext(BookmarksContext);
  const searchTerm = query.toLowerCase().trim();

  const filteredCategories = useMemo(() => {
    if (!categories) return [];

    const filtered = categories.map((category) => {
      const resources = category.tags.filter((resource) => {
        const haystack = [resource.name, resource.url, ...(resource.tags || []), category.name]
          .join(" ")
          .toLowerCase();
        return haystack.includes(searchTerm);
      });
      if (resources.length) return { ...category, tags: resources };
      return null;
    }).filter(Boolean);

    return filtered;
  }, [categories, searchTerm]);

  // Add a "Favorites" pseudo-category at the top
  const favoritesCategory = bookmarks.length
    ? [{ name: "Favorites", tags: bookmarks }]
    : [];

  const allCategories = [...favoritesCategory, ...filteredCategories];

  if (!allCategories.length) return <p>No resources found.</p>;

  return (
    <div className="space-y-8">
      {allCategories.map((category) => {
        const categoryId = category.name.toLowerCase().replace(/\s+/g, "-");
        return (
          <div key={category.name} id={categoryId} className="space-y-4 p-6 scroll-mt-20">
            <div className="flex items-center gap-4 px-0 justify-start w-full">
              <h1 className="text-2xl font-bold truncate">{category.name}</h1>
              <Separator className="flex-1" />
            </div>

            <div className="flex flex-wrap gap-4 justify-start">
              {category.tags.map((resource) => (
                <ResourceCard
                  key={resource.url}
                  name={resource.name}
                  url={resource.url}
                  imageUrl={resource.imageUrl}
                  subCategory={resource.tags?.join(", ") || "General"}
                  className="flex-1 min-w-[200px] sm:min-w-[240px] md:min-w-[256px] max-w-xs"
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
