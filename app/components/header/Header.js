"use client";

import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Roboto_Flex } from "next/font/google";

const roboto_flex = Roboto_Flex({ subsets: ["latin"] });

export const Header = () => {
  return (
    <header
      className={`flex flex-col w-100 h-screen justify-center items-center text-xl leading-normal slideInDown ${roboto_flex.className}`}
      id="home"
    >
      <span className="italic">Hello, I{"'"}m</span>
      <h1 className="font-bold text-3xl dark:text-primary">Adam Kwiasowski</h1>
      <strong className="text-secondary">Front End Developer</strong>
      <span className="italic">enjoy looking at my portfolio.</span>
      <a href="#portfolio">
        <BsFillArrowDownCircleFill className="text-3xl my-3 animate-bounce text-accent" />
      </a>

      <style jsx>
        {`
        .slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes slideInDown {
  0% {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  }
  }
  @keyframes slideInDown {
  0% {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  }
  } 
×
        `}
      </style>
    </header>
  );
};
