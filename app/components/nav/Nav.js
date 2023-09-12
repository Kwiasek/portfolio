import React from "react";
import { AiFillFolderOpen, AiFillHome, AiFillPhone } from "react-icons/ai";

export const Nav = () => {
  return (
    <nav
      id="nav"
      className="w-100 bg-slate-400 dark:bg-slate-900 p-3 flex justify-between sticky top-0"
    >
      <a href="#home">
        <strong>Adam Kwiasowski</strong>
      </a>
      <ul className="flex gap-5">
        <li>
          <a href="#home" className="flex items-center justify-between">
            Home
            <AiFillHome />
          </a>
        </li>
        <li>
          <a href="#portfolio" className="flex items-center justify-between">
            Portfolio
            <AiFillFolderOpen />
          </a>
        </li>
        <li>
          <a href="#contact" className="flex items-center justify-between">
            Contact
            <AiFillPhone />
          </a>
        </li>
      </ul>
    </nav>
  );
};
