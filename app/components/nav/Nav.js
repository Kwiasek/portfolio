import React from "react";
import { AiFillFolderOpen, AiFillHome, AiFillPhone } from "react-icons/ai";

export const Nav = () => {
  return (
    <nav
      id="nav"
      className="w-100 text-text bg-secondary dark:bg-secondary p-3 flex justify-center md:justify-between sticky top-0"
    >
      <a href="#home" className="hidden md:block hover:text-primary">
        <strong>Adam Kwiasowski</strong>
      </a>
      <ul className="flex gap-8 md:gap-5">
        <li>
          <a href="#home" className="hover:text-primary">
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-primary">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
