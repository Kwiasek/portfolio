import React from "react";
import { AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center p-3">
      <a
        href="https://github.com/Kwiasek"
        target="_blank"
        className="flex items-center gap-1  hover:text-accent"
      >
        @kwiasek <AiFillGithub />
      </a>
    </footer>
  );
};
