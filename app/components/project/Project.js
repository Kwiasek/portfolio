import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export const Project = ({ name, image, description, gitLink, liveLink }) => {
  return (
    <div className="flex flex-col gap-3 sm:max-w-xl sm:justify-center">
      <Image src={image} alt="" className="rounded-xl" />
      <strong className="text-xl">{name}</strong>
      <p className="text-slate-500 md:min-h-[25%]">{description}</p>
      <div className="flex justify-between">
        <a
          className="px-3 py-2 bg-white text-black rounded cursor-pointer focus:bg-slate-650 active:bg-slate-650 flex"
          target="_blank"
          href={liveLink}
          tabIndex="0"
        >
          Open Live
          <GoArrowUpRight />
        </a>
        <a
          className="bg-slate-800 px-3 py-2 text-white rounded cursor-pointer flex"
          target="_blank"
          href={gitLink}
          tabIndex="0"
        >
          Preview Code
          <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
};
