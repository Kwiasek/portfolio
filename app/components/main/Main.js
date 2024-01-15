"use client";

import React, { useEffect, useState } from "react";
import { Project } from "../project/Project";
import { ThreeDots } from "react-loader-spinner";

export const Main = () => {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restfulprojects.adaptable.app/projects", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server error");
        }
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => {
        setError(error);
      });
  }, []);
  return (
    <main id="portfolio" className="w-full flex flex-col gap-6 sm:gap-12 p-12">
      <h2 className="text-3xl font-bold text-secondary dark:text-primary">
        Portfolio
      </h2>

      {error ? (
        <div>Connection error</div>
      ) : projects ? (
        <div className="grid lg:grid-cols-3 sm:gap-6 md:grid-cols-2 grid-cols-1 gap-y-4">
          {projects.map((project) => {
            return (
              <Project
                key={project.name}
                name={project.name}
                description={project.desc}
                gitLink={project.repoUrl}
                liveLink={project.liveUrl}
                image={project.img}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#9fb3db"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </main>
  );
};
