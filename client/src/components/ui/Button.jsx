import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { springConfig } from "@/utils/styles";

const variantStyles = {
  primary: {
    className: "text-white shadow-md hover:shadow-lg hover:opacity-95 focus:ring-[#104cba]",
    style: {
      background: "#104cba",
      backgroundImage: "linear-gradient(45deg, black, transparent)",
    },
  },
  outline: {
    className: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
    style: {},
  },
  ghost: {
    className: "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
    style: {},
  },
  dark: {
    className: "bg-black/70 text-white border border-white/10 backdrop-blur-md hover:bg-black/80 focus:ring-white/40",
    style: {},
  },
  white: {
    className: "bg-white text-[#104cba] border border-gray-200 hover:bg-gray-50 shadow-sm font-bold focus:ring-[#104cba]",
    style: {},
  },
  "outline-white": {
    className: "bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white/40",
    style: {},
  },
  green: {
    className: "bg-[#10B981] text-white hover:shadow-md focus:ring-[#10B981]",
    style: {},
  },
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-3 text-sm rounded-full",
  lg: "px-8 py-4 text-base rounded-full",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const { className: varClass, style } = variantStyles[variant] || variantStyles.primary;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={springConfig}
      disabled={loading}
      style={style}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-60 disabled:cursor-not-allowed
        ${varClass}
        ${sizeStyles[size] || sizeStyles.md}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <Loader2 className="w-4 h-4" />
        </motion.span>
      )}
      {loading ? <span className="sr-only">Loading</span> : null}
      {children}
    </motion.button>
  );
}