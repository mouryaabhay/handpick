import React, { useContext } from "react";
import { ResourceContext } from "@/contexts/ContextHub";
import { Separator } from "@/components/ui/separator";
import ResourceCard from "./resource-card";

export default function ResourcesList() {
  const { categories } = useContext(ResourceContext);

  if (!categories || categories.length === 0) return <p>No resources available.</p>;

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.name} className="space-y-4">
          {/* Category Header */}
          <h1 className="text-2xl font-bold">{category.name}</h1>

          {category.subCategories.map((subCategory) => (
            <div key={subCategory.name} className="space-y-4">
              {/* SubCategory Divider */}
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold">{subCategory.name}</h2>
                <Separator className="flex-1" />
              </div>

              {/* Resources Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {subCategory.resources.map((resource) => (
                  <ResourceCard
                    key={resource.name}
                    name={resource.name}
                    url={resource.url}
                    iconUrl={resource.iconUrl}
                    imageUrl={resource.imageUrl}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
