import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export default function PageWrapper({ children }) {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // useEffect(() => {
  //   setMounted(true);

  //   if (prefersReduced) return;

  //   const move = (e) => {
  //     mouseX.set(e.clientX - 12);
  //     mouseY.set(e.clientY - 12);
  //   };

  //   window.addEventListener("mousemove", move);
  //   return () => window.removeEventListener("mousemove", move);
  // }, [mouseX, mouseY, prefersReduced]);

  return (
    <div className="relative min-h-screen">
      {!prefersReduced && mounted && (
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-[2px] pointer-events-none z-[9999] will-change-transform hidden lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-primary-500/5 animate-pulse" />
        </motion.div>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
