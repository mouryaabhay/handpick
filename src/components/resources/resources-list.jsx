import React, { useContext } from "react";
import { ResourceProviderContext } from "@/contexts/resource-context";
import { Separator } from "@/components/ui/separator";
import ResourceCard from "./resource-card";

export default function ResourcesList() {
  const { categories } = useContext(ResourceProviderContext);

  if (!categories || categories.length === 0)
    return <p>No resources available.</p>;

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        // Convert category name to a URL-friendly id
        const categoryId = category.name.toLowerCase().replace(/\s+/g, "-");

        return (
          <div
            key={category.name}
            id={categoryId} // <-- this makes it scrollable via anchor
            className="space-y-4 border-2 rounded-lg p-6 scroll-mt-20"
          >
            {/* Category Header */}
            <h1 className="flex text-2xl font-bold">{category.name}</h1>

            <Separator />

            {/* Unified Resource List for all Subcategories */}
            <div className="flex flex-wrap gap-4 justify-start">
              {category.subCategories.map((subCategory) =>
                subCategory.resources.map((resource) => (
                  <div
                    key={resource.name}
                    className="flex-1 min-w-[240px] max-w-[300px]"
                  >
                    <ResourceCard
                      name={resource.name}
                      url={resource.url}
                      iconUrl={resource.iconUrl}
                      imageUrl={resource.imageUrl}
                      subCategory={subCategory.name}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
