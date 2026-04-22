import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);

  const h2Words = "Ready to Scale Your Digital Future?".split(" ");

  return (
    <section
      ref={sectionRef}
      className="py-4 overflow-hidden relative bg-light"
      id="contact"
      aria-labelledby="cta-heading"
    >
      {/* Top divider - Using section-divider class */}
      <div className="absolute top-0 left-0 right-0 section-divider" aria-hidden="true" />

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className=" mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className="relative rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row min-h-[480px] shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #0D1B3E 0%, #1164E8 100%)",
          }}
        >
          {/* Left content */}
          <div className="relative z-10 p-10 sm:p-14 md:w-3/5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="glass-card w-12 h-12 rounded-2xl flex items-center justify-center mb-8 flex-shrink-0 p-0"
              aria-hidden="true"
            >
              <Rocket className="w-6 h-6 text-brand-cyan" />
            </motion.div>

            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] mb-6 tracking-tight"
            >
              {h2Words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-white/70 text-lg max-w-lg mb-10 leading-relaxed"
            >
              Join 500+ businesses building the next generation of software with SolveBytez.
              Let&apos;s architect your success together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="self-start"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 bg-white text-primary px-9 py-4 rounded-full font-bold shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                Start Free Consultation
                <ArrowRight
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10"
            >
              {[
                { value: "500+", label: "Businesses" },
                { value: "24h", label: "Response time" },
                { value: "100%", label: "Satisfaction" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-xl font-extrabold text-white">{value}</div>
                  <div className="text-xs text-white/50 font-medium">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right photo */}
          <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden" aria-hidden="true">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark/60 to-transparent z-10 hidden md:block" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-dark/60 to-transparent z-10 md:hidden" />
            <motion.img
              style={{ y: photoY }}
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
              alt=""
              className="absolute inset-0 w-full h-[120%] object-cover object-center opacity-50 -top-[10%] transition-all duration-700 hover:opacity-70"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}