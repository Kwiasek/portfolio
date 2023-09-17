import React from "react";
import { Project } from "../project/Project";
import cvBuilder from "../../../public/CVBuilder.png";

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
      </div>
    </main>
  );
};
