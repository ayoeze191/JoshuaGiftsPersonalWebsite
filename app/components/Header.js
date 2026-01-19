"use client";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Hamburger from "./Hambuger";
import { motion } from "framer-motion";
import { useState } from "react";
import MobileNav from "./MobileNavigation";

const firstName = ["J", "o", "s", "h", "u", "a"];
const lastName = ["G", "i", "f", "t"];

export default function Header() {
  const staggerDuration = 0.2;

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bounceAnimation = {
    y: [0, -4, 0],
    transition: { duration: 1, repeat: Infinity, ease: "easeInOut" },
  };
  const [open, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-white/90 backdrop-blur-md border-b border-blue-50 font-sans">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <Hamburger isOpen={open} toggle={() => setIsOpen(!open)} />
        {/* BRAND */}
        <MobileNav isOpen={open} />
        <div
          className="flex items-center gap-1 text-2xl font-bold text-[#222]"
          style={{ fontFamily: "var(--font-indie-flower)" }}
        >
          {/* Joshua */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: staggerDuration } },
            }}
          >
            {firstName.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                animate={bounceAnimation} // start bouncing after appearing
                className="inline-block tracking-tighter"
                transition={{
                  ...bounceAnimation.transition,
                  delay: i * staggerDuration,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Gift */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: staggerDuration } },
            }}
            className="ml-1"
          >
            {lastName.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                animate={bounceAnimation}
                className="inline-block tracking-tighter"
                transition={{
                  ...bounceAnimation.transition,
                  delay:
                    firstName.length * staggerDuration + i * staggerDuration, // wait for Joshua
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            {["Book", "Author"].map((item) => (
              <span
                key={item}
                className="cursor-pointer font-bold text-[#333] hover:text-blue-600 transition"
              >
                {item}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://www.instagram.com/_giftjoshua?utm_source=qr&igsh=MWZzcm5vYTBjd3k4bQ==">
              {" "}
              <FaInstagram
                size={18}
                className="text-blue-600 hover:text-blue-700 transition cursor-pointer md:text-base"
              />
            </a>
            <a>
              <FaTwitter
                size={18}
                className="text-blue-600 hover:text-blue-700 transition cursor-pointer text-[14px] md:text-base"
              />
            </a>
            <a href="https://www.linkedin.com/in/gift-joshua-436aa11a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin
                size={18}
                className="text-blue-600 hover:text-blue-700 transition cursor-pointer text-[14px] md:text-base"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
