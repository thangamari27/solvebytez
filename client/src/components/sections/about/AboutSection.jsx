import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { CheckCircle, Server, Smile, Handshake } from "lucide-react";
import { slideLeft, slideRight, springConfig } from "@/utils/styles";
import Button from "@/components/ui/Button";
import { STATS } from "@/utils/constants";

const checks = [
  "Enhanced Security Features",
  "Advanced Analytics Tools",
  "Intuitive User Interface",
  "Real-Time Insights Delivery",
];

const STAT_ICONS = { Server, CheckCircle, Smile, Handshake };

function AnimatedCounter({ target, suffix, inView }) {
  const count = useMotionValue(0);
  const smoothCount = useSpring(count, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) count.set(target);
  }, [inView, target, count]);

  useEffect(() => {
    return smoothCount.on("change", (v) => setDisplay(Math.round(v)));
  }, [smoothCount]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section
      id="about"
      className="overflow-hidden relative py-10"
      aria-labelledby="about-heading"
    >
      {/* Background Image with Black Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80")`,
        }}
        aria-hidden="true"
      />
      
      {/* Black Overlay - Updated to use brand dark with opacity */}
      <div
        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Subtle background pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left content - Glass Morphism Card */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Glass morphism card background - Updated with brand colors */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "rgba(13, 27, 62, 0.6)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(41, 204, 255, 0.2)",
              }}
              aria-hidden="true"
            />
            
            {/* Content container */}
            <div className="relative p-8 md:p-10 space-y-6">
              <motion.span
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="text-sm font-semibold text-brand-cyan uppercase tracking-[0.2em]"
              >
                About Us
              </motion.span>

              <motion.h2
                id="about-heading"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
              >
                SolveBytez&apos;s{" "}
                <span className="text-gradient-primary">
                  Premier IT
                </span>{" "}
                Services — Innovative{" "}
                <span className="text-gradient-primary">
                  Solutions
                </span>{" "}
                That Deliver
              </motion.h2>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
                className="text-white/80 leading-relaxed text-base"
              >
                We recognize that every business is unique, which is why we take the time to
                understand your specific needs and deliver tailored technology solutions. Backed
                by a proven track record and a strong commitment to client success.
              </motion.p>

              <motion.div
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {checks.map((item) => (
                  <motion.div
                    key={item}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    className="flex items-center gap-2.5"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-cyan" aria-hidden="true" />
                    </motion.span>
                    <span className="text-sm text-white/80 font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <Button 
                  variant="primary" 
                  size="md"
                  className="bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-all"
                >
                  Know More
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Image Gallery / Visual Elements - Hidden on mobile & tablet, visible on laptop/desktop */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative hidden lg:block"
          >
            {/* Main Image Card */}
            <div className="relative">
              {/* Decorative border accent with glass effect - Updated to use brand colors */}
              <div
                className="absolute -inset-3 rounded-[2rem] opacity-30 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(41,204,255,0.3), rgba(17,100,232,0.3))",
                  backdropFilter: "blur(10px)",
                }}
                aria-hidden="true"
              />

              <motion.div
                animate={inView ? { y: [0, -8, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80"
                  alt="SolveBytez professional team"
                  loading="lazy"
                  className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl border border-white/20 object-cover aspect-[4/5]"
                />
              </motion.div>

              {/* Floating stat card - Updated to use brand colors */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-dark/60 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl"
                style={{
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                    <Smile className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">98%</p>
                    <p className="text-white/60 text-xs">Client Satisfaction</p>
                  </div>
                </div>
              </motion.div>

              {/* Second floating badge - Updated to use brand colors */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -top-6 -left-4 md:-left-8 bg-brand-dark/60 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-xl"
                style={{
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center">
                    <Server className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">500+</p>
                    <p className="text-white/60 text-xs">Projects Done</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar - Updated to use brand colors */}
      <motion.div
        ref={statsRef}
        initial={{ y: 40, opacity: 0 }}
        animate={statsInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-4 sm:mx-8 lg:mx-16 rounded-[2.5rem] overflow-hidden shadow-xl relative z-10"
        style={{
          background: "rgba(13, 27, 62, 0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(41, 204, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
        aria-label="Company statistics"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => {
              const Icon = STAT_ICONS[stat.icon] || Server;
              return (
                <div key={stat.id} className="text-center text-white">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={springConfig}
                    className="inline-flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 rounded-xl mb-3"
                  >
                    <Icon className="w-5 h-5 text-brand-cyan" aria-hidden="true" />
                  </motion.div>
                  <div className="text-3xl font-extrabold mb-1 text-white">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={statsInView} />
                  </div>
                  <p className="text-sm text-white/70 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}