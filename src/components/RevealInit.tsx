"use client";

import { useEffect } from "react";

/**
 * Adds a fade-up reveal to any element with the `reveal` class as it scrolls
 * into view. Renders nothing — it just wires up an IntersectionObserver.
 */
export default function RevealInit() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const elements = Array.from(document.querySelectorAll(".reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
