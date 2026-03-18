import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const bubbles = Array.from({ length: 40 });
  const text = "Dynastech LLC";

  const letterVariants = {
    hidden: (i) => ({
      y: Math.random() > 0.5 ? -200 : 200,
      opacity: 0,
      scale: 0.9,
    }),
    visible: (i) => ({
      y: [i % 2 === 0 ? -200 : 200, i % 2 === 0 ? 40 : -40, 0],
      opacity: [0, 0.7, 1],
      scale: [0.9, 1.05, 1],
      transition: {
        delay: i * 0.15,
        duration: 1.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden bg-black">
      {bubbles.map((_, i) => {
        const isFalling = Math.random() > 0.5;
        return (
          <div
            key={i}
            className={`absolute rounded-full bg-[#F54800] opacity-80 ${
              isFalling
                ? "animate-bubbleDown top-0"
                : "animate-bubbleUp bottom-0"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${6 + Math.random() * 12}px`,
              height: `${6 + Math.random() * 12}px`,
              opacity: `${0.35 + Math.random() * 0.65}`,
            }}
          />
        );
      })}

      <motion.h1
        className="text-7xl md:text-8xl font-extrabold font-montserrat text-white tracking-widest z-10 flex flex-wrap justify-center"
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
