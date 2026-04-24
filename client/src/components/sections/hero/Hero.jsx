import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroPartners from "./HeroPartners";

const floatingItems = [
  {
    src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    top: "top-24",
    left: "left-12",
    delay: 0.3,
    duration: 4,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    top: "top-44",
    right: "right-16",
    delay: 0.6,
    duration: 5,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    bottom: "bottom-36",
    left: "left-24",
    delay: 1,
    duration: 4.5,
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
    bottom: "bottom-16",
    right: "right-36",
    delay: 1.2,
    duration: 5,
  },
];

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative flex flex-col justify-center overflow-hidden py-12"
        style={{
          background: "#1164E8",
          backgroundImage: "linear-gradient(135deg, #0D1B3E, transparent)",
        }}
        aria-label="Hero section"
      >
        {/* Ambient orbs - Updated to use brand colors */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        </div>

        {/* Floating icons */}
        {floatingItems.map(({ src, top, left, right, bottom, delay, duration }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
            transition={{
              opacity: { delay, duration: 0.5 },
              scale: { delay, duration: 0.5 },
              y: { delay, duration, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute hidden md:flex w-12 h-12 items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl"
            style={{ top, left, right, bottom }}
            aria-hidden="true"
          >
            <img src={src} alt="" className="w-6 h-6" loading="lazy" />
          </motion.div>
        ))}

        <HeroContent />
      </section>
      <HeroPartners />
    </>
  );
}