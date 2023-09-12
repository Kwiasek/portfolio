import React from "react";
import { Project } from "../project/Project";
import placehold from "../../../public/600x400.svg";

export const Main = () => {
  return (
    <main id="portfolio" className="w-100 flex flex-col gap-6 sm:gap-12 p-12">
      <h2 className="text-3xl font-bold">Portfolio</h2>
      <div className="grid lg:grid-cols-3 sm:gap-6 md:grid-cols-2 grid-cols-1 gap-y-4">
        <Project
          name="Weather App"
          description="Weather app created using Next.js, tailwindcss, WeatherAPI. You can search for your geolocation to see current weather and weather for the next week."
          image={placehold}
        />
        <Project
          name="Weather App"
          description="Weather app created using Next.js, tailwindcss, WeatherAPI. You can search for your geolocation to see current weather and weather for the next week."
          image={placehold}
        />
        <Project
          name="Weather App"
          description="Weather app created using Next.js, tailwindcss, WeatherAPI. You can search for your geolocation to see current weather and weather for the next week."
          image={placehold}
        />
        <Project
          name="Weather App"
          description="Weather app created using Next.js, tailwindcss, WeatherAPI. You can search for your geolocation to see current weather and weather for the next week."
          image={placehold}
        />
        <Project
          name="Weather App"
          description="Weather app created using Next.js, tailwindcss, WeatherAPI. You can search for your geolocation to see current weather and weather for the next week."
          image={placehold}
        />
        <Project
          name="Weather App"
          description="Weather app created using Next.js, tailwindcss, WeatherAPI. You can search for your geolocation to see current weather and weather for the next week."
          image={placehold}
        />
      </div>
    </main>
  );
};
