"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { useSectionInView } from "./hooks/useSectionView";

const words = ["Out", "Now"];

export default function OutNow() {
  const sectionRef = useSectionInView("Book");
  return (
    <div className="mx-auto max-w-5xl w-full mt-16 md:mt-32 flex flex-col md:flex-row gap-10 px-6">
      <div ref={sectionRef} className="h-px" />

      {/* TEXT SECTION */}
      <div className="md:w-1/2">
        {/* OUT NOW */}
        <div className="flex text-blue-600 font-sans font-extrabold mb-4">
          Out Now
        </div>
        {/* <motion.div
          className="flex text-blue-600 font-sans font-extrabold mb-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="mr-2"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div> */}

        {/* TITLE */}
        <h2 className="text-[2.2rem] leading-tight font-sans font-black text-[#222]">
          The Girl Who Almost Gave Up <br />
          <span className="text-blue-600">Lisa’s Story</span>
        </h2>

        {/* SHORT DESCRIPTION */}
        <p className="mt-5 font-sans text-[#333] font-semibold">
          Lisa's story A faith-inspired story about a twelve-year-old girl
          growing up in a rural Nigerian community, facing neglect, rejection,
          and emotional pain.
        </p>

        {/* LONG DESCRIPTION */}
        <p className="mt-4 font-sans text-[#444] leading-relaxed">
          Written in simple language for teens and pre-teens, this book explores
          identity, self-worth, healing, and hope. It reminds every reader that
          no matter how broken a beginning may seem, a new story is always
          possible.
        </p>

        {/* CTA */}
        <motion.a
          href="https://selar.com/m/GiftJoshua"
          whileHover={{ y: -2 }}
          className="inline-block mt-6 font-sans font-black text-blue-700 border-b-2 border-dotted border-blue-700"
        >
          Get a copy today → &nbsp;
        </motion.a>
      </div>

      {/* IMAGE SECTION */}

      <div className="md:w-1/2 relative ">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-sm"></div>
          <Image
            src="/bookcover.jpeg"
            alt="The Girl Who Almost Gave Up book cover"
            width={400}
            height={500}
            className="rounded-md z-50 relative object-cover shadow-lg mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
