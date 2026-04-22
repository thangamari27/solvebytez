import MarqueeBrandsDemo from "./MarqueeBrandsDemo";

export default function HeroPartners() {
 
  return (
    <div className="relative w-full overflow-hidden mt-5">
      <div className="py-0">
        <p className="text-center text-white/40 text-xs uppercase tracking-widest mb-1 font-semibold">
          Trusted by 100+ innovative companies
        </p>

        <div className="relative">
          {/* Gradient fade edges overlay - matches the marquee's built-in blur */}
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" /> */}
          {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" /> */}

          <MarqueeBrandsDemo />
        </div>
      </div>
    </div>
  );
}