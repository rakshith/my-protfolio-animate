"use client";

import React from "react";

import { motion } from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";

const motionVariables = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }: any) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={motionVariables}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      {/* <div className="h-[4000px]"></div> */}
    </>
  );
};

export default Template;
