import React from "react";

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  const containerClasses = `
    group flex overflow-hidden p-
    ${vertical ? "flex-col" : "flex-row"}
    ${pauseOnHover ? "pause-on-hover" : ""}
    ${className}
  `;

  const itemClasses = `
    flex shrink-0 justify-around
    ${vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"}
    ${reverse ? "animate-reverse" : ""}
  `;

  return (
    <>
      <style>
        {`
          :root {
            --gap: 10px;
            --duration: 40s;
          }

          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% - var(--gap))); }
          }

          @keyframes marquee-vertical {
            from { transform: translateY(0); }
            to { transform: translateY(calc(-100% - var(--gap))); }
          }

          .animate-marquee {
            display: flex;
            gap: var(--gap);
            animation: marquee var(--duration) linear infinite;
          }

          .animate-marquee-vertical {
            display: flex;
            gap: var(--gap);
            animation: marquee-vertical var(--duration) linear infinite;
          }

          .animate-reverse {
            animation-direction: reverse;
          }

          .pause-on-hover:hover .animate-marquee,
          .pause-on-hover:hover .animate-marquee-vertical {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className={containerClasses} {...props}>
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className={itemClasses}>
            {children}
          </div>
        ))}
      </div>
    </>
  );
}