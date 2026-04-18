import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { fadeUpVariants, staggerContainer } from "@/utils/styles";

export default function SectionHeading({
  badge,
  badgeVariant = "violet",
  title,
  highlight,
  subtitle,
  align = "left",
  className = "",
}) {
  const words = title ? title.split(" ") : [];

  const textAlign = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col gap-3 ${textAlign[align] || textAlign.left} ${className}`}
    >
      {badge && (
        <motion.div variants={fadeUpVariants} custom={0}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </motion.div>
      )}

      <motion.h2
        variants={fadeUpVariants}
        custom={1}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
      >
        {words.map((word, i) =>
          highlight && word.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-gradient-primary">
              {word}{" "}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUpVariants}
          custom={2}
          className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
