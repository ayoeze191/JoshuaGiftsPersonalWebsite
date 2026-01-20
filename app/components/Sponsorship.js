"use client";
import { motion } from "framer-motion";
import { FaClipboardCheck } from "react-icons/fa";
export default function Sponsorship() {
  return (
    <section className="mx-auto w-full mt-24 py-24 md:mt-40  bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div>
            {/* LABEL */}
            <div className="text-blue-200 font-sans font-extrabold mb-4 uppercase tracking-widest">
              Sponsorship
            </div>

            {/* TITLE */}
            <h2 className="text-[2.2rem] leading-tight font-sans font-black text-white">
              Help Rewrite <br />
              <span className="text-blue-200">Children’s Stories</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 font-sans text-blue-100 leading-relaxed">
              If you or your organization would like to sponsor the printing of
              this book for free distribution in secondary schools—especially in
              underserved communities—please reach out through the contact
              details below.
            </p>

            <p className="mt-4 font-sans text-blue-100 leading-relaxed">
              Together, we can rewrite many children’s stories and remind them
              that hope, healing, and purpose are possible.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-6 space-y-2 font-sans font-semibold text-white">
              <p>
                Email:{" "}
                <a
                  href="mailto:joshuagift50@gmail.com"
                  className="border-b border-dotted border-white/70 hover:border-white"
                >
                  joshuagift50@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:07065843640"
                  className="border-b border-dotted border-white/70 hover:border-white"
                >
                  07065843640
                </a>
              </p>
            </div>
          </div>

          {/* CTA CARD */}
          {/* CTA CARD – Hanging with Icon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center mt-24 md:mt-0"
          >
            {/* ICON + ROPE */}
            <div className="absolute -top-16 flex flex-col items-center">
              {/* Icon */}
              <div className="bg-white p-2 rounded-full shadow-md">
                <FaClipboardCheck className="text-blue-600 text-xl" />
              </div>

              {/* Rope */}
              <div className="w-[2px] h-10 bg-blue-300"></div>
            </div>

            {/* CARD */}
            <motion.div
              animate={{ rotate: [-1.2, 1.2, -1.2] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{ transformOrigin: "top center" }}
              className="relative bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm"
            >
              <h3 className="font-sans font-black text-xl text-[#222]">
                Become a Sponsor
              </h3>

              <p className="mt-3 font-sans text-[#444] leading-relaxed">
                Your support helps place this book directly into the hands of
                students who need encouragement, faith, and hope the most.
              </p>

              <a
                href="mailto:joshuagift50@gmail.com"
                className="inline-block mt-6 font-sans font-black text-blue-700 border-b-2 border-dotted border-blue-700 hover:text-blue-800"
              >
                Contact for Sponsorship →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
