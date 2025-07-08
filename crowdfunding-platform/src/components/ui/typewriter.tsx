"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  isMounted: boolean;
}

export default function TypewriterText({ isMounted }: TypewriterTextProps) {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("Fund Your Business Dreams");
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Fund Your Business Dreams",
    "Build Your Community",
    "Turn Ideas Into Reality",
    "Grow Your Business",
  ];

  useEffect(() => {
    if (
      !isMounted ||
      typeof window === "undefined" ||
      typeof setTimeout === "undefined"
    ) {
      return;
    }

    try {
      const currentFullText = texts[currentText];
      const timeout = setTimeout(
        () => {
          if (!isDeleting) {
            if (displayText.length < currentFullText.length) {
              setDisplayText(currentFullText.slice(0, displayText.length + 1));
            } else {
              setTimeout(() => setIsDeleting(true), 2500);
            }
          } else {
            if (displayText.length > 0) {
              setDisplayText(displayText.slice(0, -1));
            } else {
              setIsDeleting(false);
              setCurrentText((prev) => (prev + 1) % texts.length);
            }
          }
        },
        isDeleting ? 50 : 120,
      );
      return () => {
        if (typeof clearTimeout !== "undefined") {
          clearTimeout(timeout);
        }
      };
    } catch (error) {
      console.warn("Typewriter effect error:", error);
    }
  }, [displayText, isDeleting, currentText, texts, isMounted]);

  // Always show the same content on server and initial client render
  const staticText = "Fund Your Business Dreams";
  const showText = isMounted && typeof window !== "undefined" ? displayText : staticText;

  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 tracking-tight animate-slide-up min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center text-center px-4 sm:px-0 leading-tight">
      <span className="gradient-text-hero">{showText}</span>
      {isMounted && typeof window !== "undefined" && (
        <span className="border-r-2 border-[#56D08D] animate-pulse ml-2 h-6 sm:h-8">|</span>
      )}
    </h1>
  );
} 