"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import ResourcesList from "@/components/resources/resources-list";
import Searchbar from "@/components/other/searchbar";
import { Search, Shapes } from "lucide-react";

export default function HomePage() {
  const handleScrollToResources = () => {
    const section = document.getElementById("resources-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSf-FRDJzHWCEKRV9dWjC6dV9TScyBWqsXo6nZ3u37IJtBI4Ng/viewform?usp=sharing&ouid=100678720259994445996",
      "_blank"
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="my-20 flex flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-600">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Handpicked.dev is now live!
        </div>

        <div className="max-w-5xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance">
            Built by developers,
            <br />
            for developers who care.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
            Every tool that matters — handpicked from across the web to create a
            growing library of frameworks, ideas, and resources that make
            building faster, smarter, and more enjoyable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="sm" onClick={handleScrollToResources}>
              <Search />
              Explore
            </Button>
            <Button size="sm" variant="secondary" onClick={handleOpenForm}>
              <Shapes />
              Submit Resource
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <div id="resources-section" className="flex flex-col gap-4 my-6 mx-14 sm:px-12 lg:px-20">
        <Searchbar />
        <ResourcesList />
      </div>

      <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-800">
        <p>Handpicked.dev © 2025 — Curated by Developers</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="/about" className="hover:text-white">
            About
          </a>
          <a
            href="https://discord.gg/yourinvite"
            target="_blank"
            className="hover:text-white"
          >
            Join Discord
          </a>
          <a
            href="https://forms.gle/..."
            target="_blank"
            className="hover:text-white"
          >
            Submit Resource
          </a>
          <a
            href="https://github.com/..."
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
