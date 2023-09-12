import React from "react";
import Image from "next/image";

export const Project = ({ name, image, description, gitLink, liveLink }) => {
  return (
    <div className="flex flex-col gap-2 sm:max-w-xl sm:justify-center">
      <Image src={image} alt="" />
      <strong>{name}</strong>
      <p className="text-slate-500">{description}</p>
      <div className="flex justify-between">
        <a
          className="px-3 py-2 bg-white text-black rounded cursor-pointer"
          target="_blank"
          href={liveLink}
        >
          Open Live
        </a>
        <a
          className="bg-slate-800 px-3 py-2 text-white rounded cursor-pointer"
          target="_blank"
          href={gitLink}
        >
          Preview Code
        </a>
      </div>
    </div>
  );
};
