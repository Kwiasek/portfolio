import React from "react";

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
