import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article"; // this should accept `project` prop
import { Projects } from "../components/projects"; // ✅ newly added

export default function ProjectsPage() {
  const sorted = Projects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {[0, 1, 2].map((mod) => (
            <div key={mod} className="grid grid-cols-1 gap-4">
              {sorted
                .filter((_, i) => i % 3 === mod)
                .map((project) => (
                  <Card key={project.slug}>
                    <Article project={project} />
                  </Card>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
