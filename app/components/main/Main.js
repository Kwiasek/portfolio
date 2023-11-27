import React from "react";
import { Project } from "../project/Project";
import cvBuilder from "../../../public/CVBuilder.png";
import rickandmorty from "../../../public/rickandmorty.png";
import blogdotmd from "../../../public/blogdotmd.png";

export const Main = () => {
  return (
    <main id="portfolio" className="w-full flex flex-col gap-6 sm:gap-12 p-12">
      <h2 className="text-3xl font-bold">Portfolio</h2>
      <div className="grid lg:grid-cols-3 sm:gap-6 md:grid-cols-2 grid-cols-1 gap-y-4">
        <Project
          name="CV Builder App"
          description="App which helps you write simple and ready to print CV. Done using Vite, React, tailwindcss, papercss. Deployed on Vercel."
          image={cvBuilder}
          gitLink="https://github.com/Kwiasek/cv-builder"
          liveLink="https://cv-builder-coral.vercel.app/"
        />
        <Project
          name="Rick and Morty Memory"
          description="Simple memory game, characters are fetched from https://rickandmortyapi.com/."
          image={rickandmorty}
          gitLink="https://github.com/Kwiasek/rickandmorty-memory"
          liveLink="https://rickandmorty-memory.vercel.app/"
        />
        <Project
          name="blog.md"
          description="Blog site with little CMS where you write your posts in markdown language."
          image={blogdotmd}
          gitLink="https://github.com/Kwiasek/blogdotmd"
          liveLink="https://blogdotmd.vercel.app/"
        />
      </div>
    </main>
  );
};
