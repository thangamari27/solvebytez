import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Badge from "@/components/ui/Badge";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Testimonials() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const autoScrollIntervalRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const h2Words = "Success Stories from High-Performance Teams".split(" ");

  // Auto-scroll functionality (similar to Services component)
  useEffect(() => {
    if (!autoScrollEnabled || isHovering) return;

    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const nextScroll = scrollLeft + 400;
        
        if (nextScroll >= maxScroll) {
          // Smooth scroll back to start
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [autoScrollEnabled, isHovering]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
    
    // Pause auto-scroll temporarily on manual scroll
    setAutoScrollEnabled(false);
    setTimeout(() => setAutoScrollEnabled(true), 5000);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-8 overflow-hidden"
      style={{
        background: "#0D1B3E", // Dark navy background
        backgroundImage: "linear-gradient(135deg, #0D1B3E 0%, #0a0a2e 50%, #0D1B3E 100%)",
      }}
      aria-labelledby="testimonials-heading"
    >
      {/* Background pattern with low opacity - Dark theme with brand cyan */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2329CCFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Subtle background gradient overlay - Updated to use brand colors */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(41,204,255,0.08) 0%, transparent 100%)",
        }}
      />

      {/* Top gradient divider - Updated to use brand cyan */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #29CCFF, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-6">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <Badge 
                variant="primary" 
                className="bg-white/10 text-brand-cyan border-white/20"
              >
                Success Stories
              </Badge>
            </motion.div>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              {h2Words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05 }}
                  className="inline-block mr-2 text-white"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-lg"
            >
              Hear what our clients say about their experience working with us
            </motion.p>
          </div>

          {/* Scroll controls - Updated to use brand colors */}
          <div className="flex items-center gap-3" aria-label="Scroll testimonials">
            <motion.button
              onClick={() => scroll(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-brand-cyan hover:border-brand-cyan transition-all bg-white/5 backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-brand-cyan hover:border-brand-cyan transition-all bg-white/5 backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Cards scrollable row - Similar to Services component */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          role="list"
          aria-label="Testimonials list"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="snap-start shrink-0 w-[85vw] sm:w-[380px] lg:w-[420px] transform transition-all duration-300 hover:-translate-y-1"
              role="listitem"
            >
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="h-full bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                role="article"
              >
                {/* Quote icon - Updated to use brand cyan with low opacity */}
                <Quote className="w-10 h-10 text-brand-cyan/10 absolute top-6 right-6" aria-hidden="true" />
                
                {/* Star rating - Updated to use brand cyan */}
                <div className="flex gap-1 mb-6" aria-label="5 out of 5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brand-cyan text-brand-cyan"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Testimonial text - Dark text for light card */}
                <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 font-medium">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client info - without image */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    {/* Initial avatar circle - Updated with brand gradient */}
                    <div 
                      className="relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #29CCFF, #1164E8)",
                      }}
                    >
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm tracking-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5 truncate">
                        {testimonial.role} at{" "}
                        <span className="text-brand-cyan font-semibold">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Scroll hint indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <p className="text-white/30 text-xs flex items-center gap-2">
            <span>←</span> Scroll to see more <span>→</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}