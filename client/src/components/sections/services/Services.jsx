import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Badge from "@/components/ui/Badge";
import { springConfig } from "@/utils/styles";

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="relative pt-8 overflow-hidden bg-white"
      aria-labelledby="services-heading"
    >
      {/* PNG Background Pattern */}
      <div
        className="absolute inset-0 opacity-[.3] pointer-events-none"
        style={{
          backgroundImage:
            "url('/pattern1.png')",
        }}
      />

      {/* Gradient divider - Updated to use brand colors */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-60 section-divider" />

      <div className="relative  mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="primary">Expertise & Solutions</Badge>
            </motion.div>

            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-dark leading-[1.2]"
            >
              Complete Technology Solutions for{" "}
              <span className="text-gradient-primary">
                Modern Businesses
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg"
            >
              Build, launch, and scale your digital presence with our
              high-performance technology services.
            </motion.p>
          </div>

          {/* SCROLL BUTTONS - Updated hover colors */}
          <div className="flex items-center gap-3">
            {[{ Icon: ChevronLeft, dir: -1 }, { Icon: ChevronRight, dir: 1 }].map(
              ({ Icon, dir }, i) => (
                <motion.button
                  key={i}
                  onClick={() => scroll(dir)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={springConfig}
                  className="w-11 h-11 rounded-full border border-surface-border flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition"
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              )
            )}
          </div>
        </div>

        {/* SCROLL ROW */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden pb-6 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[380px]"
            >
              {/* Animated Border Wrapper */}
              <div className="relative group rounded-2xl p-[3px] overflow-hidden">

                {/* Animated Gradient Border - Updated to use brand colors */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="w-full h-full bg-primary-gradient" />
                </div>

                {/* Card */}
                <div className="relative bg-white rounded-2xl border border-surface-border shadow-md group-hover:shadow-xl transition duration-300">
                  <ServiceCard service={service} index={i} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST SECTION - Updated to use brand colors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-5 py-4 px-2 border-2 border-gray-200 rounded-2xl"
        >
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div>
              <p className="text-dark font-semibold">
                Trusted Clients Worldwide
              </p>
              <p className="text-sm text-gray-500">
                Delivering scalable solutions across industries
              </p>
            </div>
          </div>

          {/* RIGHT CTA - Updated to use brand colors */}
          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-primary font-bold text-sm group"
          >
            Explore All Capabilities
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}