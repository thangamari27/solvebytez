import { useEffect, useState } from "react";
import { useScroll as useFramerScroll, useMotionValueEvent } from "framer-motion";

export function useScroll() {
  const { scrollY, scrollYProgress } = useFramerScroll();
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    scrollProgress: 0,
    direction: "down",
  });
  const [prevY, setPrevY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > prevY ? "down" : "up";
    setPrevY(latest);
    setScrollData((prev) => ({
      ...prev,
      scrollY: latest,
      direction,
    }));
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollData((prev) => ({
      ...prev,
      scrollProgress: latest,
    }));
  });

  return scrollData;
}
