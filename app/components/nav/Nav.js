import React from "react";
import { AiFillFolderOpen, AiFillHome, AiFillPhone } from "react-icons/ai";

export const Nav = () => {
  return (
    <nav
      id="nav"
      className="w-100 bg-slate-400 dark:bg-slate-900 p-3 flex justify-center md:justify-between sticky top-0"
    >
      <a href="#home" className="hidden md:block">
        <strong>Adam Kwiasowski</strong>
      </a>
      <ul className="flex gap-8 md:gap-5">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
