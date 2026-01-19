"use client";

import { motion } from "framer-motion";

const words = ["Hi,", "i'm", "Joshua", "Gift"];

export default function Home() {
  return (
    <div className="relative font-sans  ">
      <div className="w-20 mx-auto bg-blue-200 rounded-[40px] h-[15px] py-1 px-1">
        <div className="bg-blue-700 rounded-full w-2 h-full"></div>
      </div>
      <motion.div
        className="text-4xl font-bold text-black mx-auto w-fit mt-16 flex gap-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={
              word === "Joshua" || word === "Gift" ? "text-blue-600" : ""
            }
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: {
                y: [0, -15, 0],
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
      <div className="w-fit mx-auto">
        <motion.span
          className="text-[#333333] text-center mx-auto text-[16px] font-sans font-normal w-fit mt-4  inline-block"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: 30,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            },
          }}
        >
          I’m an author and thinker interested in philosophy, human action, and{" "}
          <br />
          the ideas that shape public life. My writing explores inner dialogue,
          <br />
          responsibility, and the meaning of action in the modern world.
        </motion.span>
      </div>
    </div>
  );
}
