import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function ResourceCard({ name, url, imageUrl }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="hover:shadow-lg transition-shadow cursor-pointer gap-4 p-4">
        {imageUrl && (
          <img src={imageUrl} alt={name} className="h-48 rounded-lg" />
        )}

        {/* Floating name container */}
          <CardContent className="flex items-center justify-between bg-black/70 text-white rounded-lg p-3 min-w-[200px] shadow-lg transition-all group-hover:bg-black/80">
            <CardTitle className="text-sm md:text-base">{name}</CardTitle>
            <ArrowUpRight size={20} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
          </CardContent>
      </Card>
    </a>
  );
}
