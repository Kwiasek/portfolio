"use client";

import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const Header = () => {
  return (
    <header
      className="flex flex-col w-100 h-screen justify-center items-center text-xl leading-normal slideIn"
      id="home"
    >
      <span className="italic slide-in">Hello, I{"'"}m</span>
      <h1 className="font-bold text-3xl">Adam Kwiasowski</h1>
      <strong>Front End Developer</strong>
      <span className="italic">enjoy looking at my portfolio.</span>
      <a href="#portfolio">
        <BsFillArrowDownCircleFill className="text-3xl my-3 animate-bounce" />
      </a>

      <style jsx>
        {`
          .slideIn {
            animation: slide-in 1s ease-out;
          }

          @keyframes slide-in {
            from {
              transform: translateY(-30%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </header>
  );
};
