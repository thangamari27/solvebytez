import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStack } from "@/data/techstack";
import { services } from "@/data/services";
import { Code2, Package, Sparkles, ArrowRight, Zap, Shield, Globe, Smartphone } from "lucide-react";
import { slideLeft, slideRight, springConfig } from "@/utils/styles";

const ORBIT_RADIUS = 130;

function OrbitDiagram({ inView }) {
  return (
    <div
      className="relative w-[320px] h-[320px] mx-auto flex items-center justify-center"
      role="img"
      aria-label="Technology orbit diagram showing our tech stack"
    >
      {/* SVG orbit ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none" aria-hidden="true">
        <motion.circle
          cx="160"
          cy="160"
          r={ORBIT_RADIUS}
          stroke="#00F2FE"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {techStack.map((tech, i) => {
          const angle = (tech.startAngle * Math.PI) / 180;
          const x = 160 + ORBIT_RADIUS * Math.cos(angle);
          const y = 160 + ORBIT_RADIUS * Math.sin(angle);
          return (
            <motion.line
              key={tech.id}
              x1="160" y1="160" x2={x} y2={y}
              stroke="#00F2FE"
              strokeWidth="1"
              strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.2 } : { pathLength: 0, opacity: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
        style={{
          background: "linear-gradient(135deg, #104cba, #00F2FE)",
        }}
        aria-hidden="true"
      >
        <Sparkles className="w-7 h-7 text-white" />
      </motion.div>

      {/* Orbit icons - Using flat icon images */}
      {techStack.map((tech, i) => {
        const angle = (tech.startAngle * Math.PI) / 180;
        const x = ORBIT_RADIUS * Math.cos(angle);
        const y = ORBIT_RADIUS * Math.sin(angle);
        return (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.4, zIndex: 10 }}
            className="absolute cursor-pointer group"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="w-11 h-11 bg-white border border-gray-200 shadow-sm rounded-2xl flex items-center justify-center hover:border-[#00F2FE] hover:shadow-md transition-all overflow-hidden"
              style={{ 
                background: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
              }}
              title={tech.name}
            >
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-6 h-6 object-contain"
                loading="lazy"
              />
            </div>
            {/* Tooltip */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
              {tech.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Get unique service categories for right section
const serviceHighlights = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Full-Stack Development",
    description: "End-to-end web and mobile solutions with modern frameworks"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance standards"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Cloud-Native Architecture",
    description: "Scalable AWS, Azure, and GCP deployments"
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Cross-Platform Apps",
    description: "iOS, Android, and Web from single codebase"
  }
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="techstack"
      className="py-8 overflow-hidden relative"
      ref={ref}
      aria-labelledby="techstack-heading"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
      }}
    >
      {/* Subtle blue tint orb */}
      <div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #104cba 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Orbital diagram with flat icons */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <OrbitDiagram inView={inView} />
          </motion.div>

          {/* Right: Enhanced Content */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-semibold text-[#104cba] uppercase tracking-[0.2em] mb-3">
                Our Tech Stack & Services
              </p>
              <h2
                id="techstack-heading"
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
              >
                Modern{" "}
                <span className="relative inline-block">
                  Technology
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-1 left-0 w-full h-1 rounded-full origin-left"
                    style={{ background: "linear-gradient(90deg, #104cba, #00F2FE)" }}
                    aria-hidden="true"
                  />
                </span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                We combine cutting-edge technologies with expert development practices to deliver 
                scalable, secure, and high-performance solutions that drive business growth.
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#104cba]" />
                Technologies We Master
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.slice(0, 8).map((tech) => (
                  <motion.span
                    key={tech.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + tech.id * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#104cba] hover:text-[#104cba] transition-all shadow-sm"
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Service Highlights - Cards */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Package className="w-4 h-4 text-[#104cba]" />
                What We Deliver
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {serviceHighlights.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#104cba] group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {service.title}
                        </h4>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats or CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00F2FE]" />
                  <span className="text-sm text-gray-600">50+ Technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#104cba]" />
                  <span className="text-sm text-gray-600">200+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00F2FE]" />
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}