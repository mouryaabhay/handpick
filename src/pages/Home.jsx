import React from "react";
import { Button } from "@/components/ui/button";
import ResourcesList from "@/components/resources/resources-list";

export default function HomePage() {
  const handleScrollToResources = () => {
    const section = document.getElementById("resources-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenForm = () => {
    window.open("https://forms.gle/YOUR_GOOGLE_FORM_ID", "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="mt-20 mb-24 flex flex-col items-center justify-center px-6 text-center">
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
            Built by developers,<br />for developers who care.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
            Every tool that matters — handpicked from across the web to create a
            growing library of frameworks, ideas, and resources that make building
            faster, smarter, and more enjoyable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="sm" onClick={handleScrollToResources}>
              Browse Resources
            </Button>
            <Button size="sm" variant="secondary" onClick={handleOpenForm}>
              Submit Resource
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <div id="resources-section" className="px-6 sm:px-12 lg:px-20">
        <ResourcesList />
      </div>
    </>
  );
}
