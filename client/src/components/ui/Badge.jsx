import { motion } from "framer-motion";
import { springConfig } from "@/utils/styles";

const variantStyles = {
  // Light theme badges (for white-bg sections)
  primary: "bg-blue-50 text-[#104cba] border border-blue-100",
  blue: "bg-[#00F2FE]/10 text-[#0891b2] border border-[#00F2FE]/20",
  green: "bg-[#10B981]/10 text-[#059669] border border-[#10B981]/20",
  yellow: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  // Dark theme badges (for dark-bg sections)
  dark: "bg-white/10 text-white border border-white/10",
  "dark-blue": "bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20",
};

export default function Badge({ children, variant = "primary", className = "" }) {
  return (
    <motion.span
      whileHover={{ scale: 1.04, y: -1 }}
      transition={springConfig}
      className={`
        inline-flex items-center gap-1.5 px-3 py-1 rounded-full
        text-[11px] font-bold tracking-wider uppercase
        ${variantStyles[variant] || variantStyles.primary}
        ${className}
      `}
    >
      {children}
    </motion.span>
  );
}