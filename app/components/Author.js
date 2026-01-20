"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { useSectionInView } from "./hooks/useSectionView";
export default function Author() {
  const sectionRef = useSectionInView("Author");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  });
  return (
    <section className="max-w-5xl mx-auto px-6 mt-24  md:mt-40">
      <div ref={sectionRef} className="h-px" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* IMAGE */}
        <div
          //   data-aos="flip-right"
          className="relative  w-full h-105 transition-all duration-300 hover:scale-[1.02] hover:rotate-1"
        >
          <Image
            src="/gift.jpeg"
            alt="Gift Joshua"
            fill
            className="object-cover rounded-md shadow-lg"
          />
        </div>

        {/* TEXT */}
        <div>
          {/* SMALL TITLE */}
          <p className="text-sm uppercase font-sans tracking-widest text-blue-600 font-extrabold">
            About Gift
          </p>

          {/* MAIN TEXT */}
          {/* <p className="mt-5 text-[#333] leading-relaxed font-sans font-semibold">
            My name is Gift Joshua, and I write because I believe that words can
            heal hearts. Working with children and teenagers over the years has
            made me realize that many children who struggle academically,
            emotionally, socially, and even physically do so not because they
            don’t have what it takes to succeed, but because they lack love and
            affirmation from people who should give it freely.
          </p> */}
          {/* SECOND PARAGRAPH */}
          <p className="mt-4 text-[#444] leading-relaxed font-sans">
            Gift Joshua is a writer and social impact advocate, who is committed
            to helping children and teenagers discover their identity and walk
            in purpose. She does this through mentorship, trainings and
            counseling
          </p>

          {/* CTA */}
          <a
            href="#"
            className="inline-block mt-6 font-sans font-black text-blue-700 border-b-2 border-dotted border-blue-700 hover:opacity-80 transition"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
