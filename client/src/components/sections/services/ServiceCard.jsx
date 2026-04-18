import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { springConfig } from "@/utils/styles";

export default function ServiceCard({ service, index }) {
  const Icon = LucideIcons[service.icon] || LucideIcons.Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: 0 }}
      className="bg-white border border-surface-border rounded-2xl p-8 h-[360px] flex flex-col cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 group"
      role="article"
      aria-label={`Service: ${service.title}`}
    >
      {/* Icon - Updated to use brand colors */}
      <motion.div
        whileHover={{ rotate: 5, scale: 1.08 }}
        transition={springConfig}
        className="relative w-14 h-14 flex items-center justify-center mb-7 flex-shrink-0"
      >
        <div
          className="absolute inset-0 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"
          style={{
            background: "#1164E8",
            backgroundImage: "linear-gradient(45deg, #0D1B3E, transparent)",
            opacity: 0.12,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: "linear-gradient(135deg, #29CCFF 0%, #1164E8 100%)",
          }}
          aria-hidden="true"
        />
        <Icon
          className="w-7 h-7 relative z-10 text-primary group-hover:text-white transition-colors"
          aria-hidden="true"
        />
      </motion.div>

      <div className="space-y-3 flex-1 min-h-0">
        <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors tracking-tight leading-snug">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
          {service.description}
        </p>
      </div>

      <div className="pt-5 border-t border-surface-border flex items-center justify-between mt-4">
        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
          Service 0{service.id}
        </span>
        <motion.a
          href="#contact"
          whileHover={{ x: 4 }}
          className="flex items-center gap-1.5 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all"
          aria-label={`Learn more about ${service.title}`}
        >
          Details
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </motion.a>
      </div>
    </motion.div>
  );
}