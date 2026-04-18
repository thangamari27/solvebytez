import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const partnerLogos = [
  { name: "", src: "/b1.png" },
  { name: "", src: "/b2.png" },
  { name: "", src: "/b3.png" },
  { name: "", src: "/b4.png" },
  { name: "", src: "/b5.png" },
  { name: "", src: "/b6.png" },
  { name: "", src: "/b7.png" },
  { name: "", src: "/b8.png" },
  { name: "", src: "/b9.png" },
  { name: "", src: "/b10.png" },
  { name: "", src: "/b11.png" },
  { name: "", src: "/b12.png" },
  { name: "", src: "/b13.png" },
  { name: "", src: "/b14.png" },
];

// 🔥 Duplicate properly for seamless infinite scroll
const duplicatedLogos = [
  ...partnerLogos,
];

export default function HeroPartners() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // 🔥 Smooth infinite marquee
  useEffect(() => {
    if (isPaused) return;

    controls.start({
      x: ["0%", "-33.333%"], // match 3x duplication
      transition: {
        duration: 35, // smoother slower scroll
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [isPaused, controls]);

  return (
    <div className="relative w-full overflow-hidden mt-5">

      {/* 🔥 Smooth fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from- via-black/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from- via-black/80 to-transparent z-10" />

      <div className="py-10">
        <p className="text-center text-white/40 text-xs uppercase tracking-widest mb-8 font-semibold">
          Trusted by 100+ innovative companies
        </p>

        <div className="relative overflow-hidden group">

          {/* MARQUEE */}
          <motion.div
            ref={containerRef}
            className="flex gap-16 w-max min-w-[300%] will-change-transform"
            animate={controls}

            // pause on hover
            onMouseEnter={() => {
              setIsPaused(true);
              controls.stop();
            }}
            onMouseLeave={() => setIsPaused(false)}

            // drag support (optional feel)
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            dragElastic={0.03}

            whileTap={{ cursor: "grabbing" }}
          >
            {duplicatedLogos.map((logo, idx) => (
              <LogoItem key={idx} logo={logo} />
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}

/* LOGO ITEM */
function LogoItem({ logo }) {
  return (
    <div className="flex items-center justify-center flex-shrink-0 px-2">

      <motion.img
        src={logo.src}
        alt={logo.name}
        loading="lazy"

        // 🔥 Bigger + clearer logos
        className="h-12 md:h-14 w-auto object-contain rounded-2xl"

        // 🔥 Remove white background trick
        style={{
          mixBlendMode: "multiply", // removes white bg nicely
        }}

        whileHover={{
          scale: 1.1,
          y: -2,
        }}

        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      />
    </div>
  );
}