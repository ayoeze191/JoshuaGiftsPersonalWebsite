"use client";
import { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";

export function useSectionInView(sectionName) {
  const sectionRef = useRef(null);
  const { changeSection } = useAppContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          changeSection(sectionName);
        }
      },
      {
        threshold: 0.5,
      },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [sectionName, changeSection]);

  return sectionRef;
}
