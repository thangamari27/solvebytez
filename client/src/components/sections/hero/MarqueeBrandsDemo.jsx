import React from "react";
import { Marquee } from "./Marquee";

export default function MarqueeBrandsDemo() {
  const brands = [
    { src: "/b1.png", name: "Brand 1" },
    { src: "/b2.png", name: "Brand 2" },
    { src: "/b3.png", name: "Brand 3" },
    { src: "/b4.png", name: "Brand 4" },
    { src: "/b5.png", name: "Brand 5" },
    { src: "/b6.png", name: "Brand 6" },
    { src: "/b7.png", name: "Brand 7" },
    { src: "/b8.png", name: "Brand 8" },
    { src: "/b9.png", name: "Brand 9" },
    { src: "/b10.png", name: "Brand 10" },
    { src: "/b11.png", name: "Brand 11" },
    { src: "/b12.png", name: "Brand 12" },
  ];

  return (
    <div className="[--duration:60s]">
      <Marquee pauseOnHover>
        {brands.map((brand, i) => (
          <img
            key={i}
            src={brand.src}
            alt={brand.name}
            className="w-36 h-28 mr-10 object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
}