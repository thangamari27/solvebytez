import { motion } from "framer-motion";
import { PhoneCall, Mail } from "lucide-react";

export default function TopBar({ visible }) {
const SOCIAL_LINKS = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png", // Facebook
    url: "https://www.facebook.com/profile.php?id=61566450177071",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/733/733558.png", // Instagram
    url: "https://www.instagram.com/solve_bytez_/",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/733/733561.png", // LinkedIn
    url: "https://www.linkedin.com/in/solve-bytez-57741632b/",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/174/174883.png", // YouTube
    url: "https://www.youtube.com/@SolveBytez",
  },
];
  return (
    <motion.div
      initial={false}
      animate={{ y: visible ? 0 : -50 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-10 flex justify-between items-center bg-primary-gradient"
    >
      <div className="w-full px-4 flex items-center justify-center md:justify-between h-10 text-sm text-white/90">

        {/* LEFT */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+919599179795" className="flex items-center gap-2 hover:text-white">
            <PhoneCall className="w-4 h-4" />
            +91-9599179795
          </a>

          <a href="mailto:info@solvebytez.com" className="flex items-center gap-2 hover:text-white">
            <Mail className="w-4 h-4" />
            info@solvebytez.com
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center gap-4">
          {SOCIAL_LINKS.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 bg-white flex items-center justify-center rounded-full transition"
            >
              <img src={item.icon} className="w-4 h-4" alt="social icon" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}