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

    return categories
      .map((category) => {
        const resources = category.tags.filter((resource) => {
          const haystack = [
            resource.name,
            resource.url,
            ...(resource.tags || []),
            category.name,
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(searchTerm);
        });
        if (resources.length) return { ...category, tags: resources };
        return null;
      })
      .filter(Boolean);
  }, [categories, searchTerm]);

  // Add a "Favorites" pseudo-category at the top
  const favoritesCategory = bookmarks.length
    ? [{ name: "Favorites", tags: bookmarks }]
    : [];

  const allCategories = [...favoritesCategory, ...filteredCategories];

  if (!allCategories.length) return <p>No resources found.</p>;

  return (
    <div className="flex flex-col gap-4">
      {allCategories.map((category) => {
        const categoryId = category.name.toLowerCase().replace(/\s+/g, "-");

        return (
          <section
            key={category.name}
            id={categoryId}
            className="flex flex-col gap-8 py-4 md:px-8"
          >
            {/* Header */}
            <div className="flex items-center gap-4 justify-start w-full">
              <h2 className="text-2xl font-bold truncate">{category.name}</h2>
              <Separator className="flex-1" />
            </div>

            {/* Cards grid */}
            <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {category.tags.map((resource) => (
                <li key={resource.url}>
                  <ResourceCard
                    name={resource.name}
                    url={resource.url}
                    imageUrl={resource.imageUrl}
                    tags={resource.tags || []}
                    badges={resource.badges || []}
                    className="w-full" // Card takes full width of the grid cell
                  />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
