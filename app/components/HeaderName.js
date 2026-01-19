"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Joshua", "Gift"];

export default function HeaderName() {
  const [displayed, setDisplayed] = useState(""); // currently typed string
  const [currentWord, setCurrentWord] = useState(0); // which word we're on
  const [typing, setTyping] = useState(true); // typing vs deleting

  useEffect(() => {
    let timeout;

    const fullWord = words[currentWord];

    if (typing) {
      // type one character at a time
      if (displayed.length < fullWord.length) {
        timeout = setTimeout(() => {
          setDisplayed(fullWord.slice(0, displayed.length + 1));
        }, 200); // adjust typing speed here
      } else {
        // full word typed, pause, then “bold/grow and exit”
        timeout = setTimeout(() => {
          setTyping(false);
        }, 800); // pause before exit
      }
    } else {
      // deleting / exiting
      timeout = setTimeout(() => {
        setDisplayed("");
        setCurrentWord((prev) => (prev + 1) % words.length); // next word
        setTyping(true);
      }, 800); // pause after bold effect
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, currentWord]);

  return (
    <div
      className="order-2 md:order-1 text-2xl font-bold text-[#222]"
      style={{ fontFamily: "var(--font-indie-flower)" }}
    >
      <AnimatePresence>
        {displayed && (
          <motion.span
            key={displayed + currentWord}
            initial={{ opacity: 0, y: 10, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1.05 }} // small emphasis
            exit={{ opacity: 0, y: -10, scale: 0.95 }} // exit effect
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block" }}
          >
            {displayed}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
