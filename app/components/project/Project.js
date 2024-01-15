import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { Roboto_Flex } from "next/font/google";
import { Buffer } from "buffer";

const roboto_flex = Roboto_Flex({ subsets: ["latin"] });

export const Project = ({ name, image, description, gitLink, liveLink }) => {
  return (
    <div className="flex flex-col gap-3 sm:max-w-xl justify-center bg-primary dark:bg-secondary px-5 py-6 rounded-xl h-max min-h-full">
      <div className="image-container">
        <Image
          src={`data:${image.contentType};base64, ${Buffer.from(
            image.data
          ).toString("base64")}`}
          alt="Picture representing project"
          className="rounded-xl"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
      </div>
      <strong className="text-xl text-secondary dark:text-primary">
        {name}
      </strong>
      <p className={`text-slate-500 flex-auto ${roboto_flex.className}`}>
        {description}
      </p>
      <div className="flex justify-between">
        <a
          className="px-3 py-2 bg-accent text-background dark:text-text rounded cursor-pointer focus:bg-slate-650 active:bg-slate-650 flex"
          target="_blank"
          href={liveLink}
          tabIndex="0"
        >
          Open Live
          <GoArrowUpRight />
        </a>
        <a
          className="bg-slate-800 px-3 py-2 text-primary bg-background rounded cursor-pointer flex"
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
