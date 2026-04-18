import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light px-4">
      <div className="text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-4 text-8xl sm:text-9xl font-bold bg-primary-gradient bg-clip-text text-white mb-6"
        >
          404
        </motion.div>

        {/* Message */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-dark mb-3"
        >
          Page not found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mb-8 max-w-sm mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}