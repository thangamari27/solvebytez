import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
];

export default function HeroContent() {
  return (
    <div className="relative z-10 container mx-auto px-6 text-center">

      {/* Badge - Updated to use brand colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm rounded-full bg-white/10 text-white/80 border border-white/15"
        aria-label="1500+ clients satisfied"
      >
        <Sparkles className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
        <span>1500+ clients satisfied</span>
      </motion.div>

      {/* Heading - Updated to use brand gradient */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto text-white"
      >
        Unlock Your Business{" "}
        <span className="text-gradient-primary">
          Potential
        </span>{" "}
        with SolveBytez
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="max-w-xl mx-auto text-white/70 mb-8 text-lg leading-relaxed"
      >
        Build, scale, and grow your digital presence with innovative technology
        solutions crafted by expert engineers.
      </motion.p>

      {/* CTA Buttons - Updated to use btn-primary and btn-secondary classes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        <a
          href="/contact"
          className="btn-primary px-8 py-3.5"
          style={{
            boxShadow: "0 0 20px rgba(16,76,186,0.4)",
          }}
        >
          Book a Call →
        </a>
        <a
          href="#services"
          className="px-8 py-3.5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all font-bold focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          See Our Services
        </a>
      </motion.div>

      {/* Hero Visual */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex justify-center"
      >
        {/* Center image */}
        <div className="relative w-[320px] md:w-[420px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 p-2 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80"
            alt="SolveBytez team collaborating"
            className="w-full h-60 object-cover rounded-xl"
            loading="eager"
          />
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm border border-white/10 whitespace-nowrap">
            ❤️ 9,999+ satisfied clients
          </div>
        </div>

        {/* Left notification card - Updated to use brand colors */}
        <div className="hidden md:block absolute left-16 top-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 w-56 text-left shadow-xl">
          <p className="text-xs text-white/50 mb-3 uppercase tracking-wider font-bold">
            New Notification
          </p>
          <div className="flex justify-between items-center gap-2">
            <span className="text-sm text-white/90">noelam followed you</span>
            <button
              className="text-[10px] text-white px-2 py-1 rounded-full font-bold bg-primary-gradient"
            >
              Follow
            </button>
          </div>
        </div>

        {/* Right comment card - Updated to use brand colors */}
        <div className="hidden md:block absolute right-16 top-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 w-64 text-left shadow-xl">
          <p className="text-xs text-white/50 mb-3 uppercase tracking-wider font-bold">
            Latest Comment
          </p>
          <p className="text-sm text-white/90 leading-relaxed">
            <b className="text-brand-cyan">rubyxx:</b> Wow this looks amazing!
          </p>
        </div>
      </motion.div>
    </div>
  );
}