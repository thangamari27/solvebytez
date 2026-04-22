import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { PAGE_LINKS, SERVICE_LINKS, WORKING_HOURS, CONTACT_INFO, SOCIAL_LINKS } from "@/utils/constants";
import { fadeUpVariants, staggerContainer } from "@/utils/styles";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark border-t border-white/5 overflow-hidden" role="contentinfo">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("")`,
        }}
        aria-hidden="true"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/95 to-dark/98" aria-hidden="true" />
      
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2329CCFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "30px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand column */}
          <motion.div variants={fadeUpVariants} custom={0} className="space-y-4">
            <a href="/" className="inline-block" aria-label="SolveBytez Home">
              <img
                src="/FinalLogo.png"
                alt="SolveBytez"
                className="h-16 w-auto bg-white rounded"
                loading="lazy"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              Building reliable digital solutions for modern businesses. We architect,
              develop, and scale powerful software systems globally.
            </p>
            <div className="flex items-center gap-2 pt-2 flex-wrap" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={`${social.label} (opens in new tab)`}
                  role="listitem"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-9 h-9 bg-white border border-white/10 rounded-xl hover:bg-primary hover:border-white/30 flex items-center justify-center transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src={social.iconSrc} 
                    alt={social.label}
                    className="w-4 h-4 transition-opacity"
                    loading="lazy"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Page Links (replaces Working Hours) */}
          <motion.div variants={fadeUpVariants} custom={1} className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest opacity-70">
              Quick Links
            </h3>
            <ul className="space-y-0.5" role="list">
              {PAGE_LINKS.map((link) => (
                <li key={link.id}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white py-1.5 group transition-colors"
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      aria-hidden="true"
                    />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Links */}
          <motion.div variants={fadeUpVariants} custom={2} className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest opacity-70">
              Our Services
            </h3>
            <ul className="space-y-0.5" role="list">
              {SERVICE_LINKS.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white py-1.5 group transition-colors"
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      aria-hidden="true"
                    />
                    {service.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            {/* Show remaining services in a condensed view */}
            {SERVICE_LINKS.length > 6 && (
              <details className="mt-2">
                <summary className="text-xs text-white/40 hover:text-white/60 cursor-pointer transition-colors">
                  + {SERVICE_LINKS.length - 6} more services
                </summary>
                <ul className="mt-2 space-y-0.5 pl-2">
                  {SERVICE_LINKS.slice(6).map((service) => (
                    <li key={service.id}>
                      <motion.a
                        href={service.href}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/60 py-1 group transition-colors"
                      >
                        <ChevronRight
                          className="w-3 h-3 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                          aria-hidden="true"
                        />
                        {service.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div variants={fadeUpVariants} custom={3} className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-widest opacity-70">
              Contact Us
            </h3>
            <address className="not-italic space-y-3">
              {[
                {
                  Icon: Phone,
                  text: CONTACT_INFO.phone,
                  href: `tel:${CONTACT_INFO.phone}`,
                  label: "Phone",
                },
                {
                  Icon: Mail,
                  text: CONTACT_INFO.email,
                  href: `mailto:${CONTACT_INFO.email}`,
                  label: "Email",
                },
                {
                  Icon: MapPin,
                  text: CONTACT_INFO.address,
                  href: "#",
                  label: "Address",
                },
              ].map(({ Icon, text, href, label }) => (
                <motion.a
                  key={text}
                  href={href}
                  aria-label={`${label}: ${text}`}
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="text-brand-cyan mt-0.5 flex-shrink-0" aria-hidden="true">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors leading-relaxed">
                    {text}
                  </span>
                </motion.a>
              ))}
            </address>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="border-t border-white/5 pt-2 flex flex-col sm:flex-row items-center justify-end gap-3"
        >
          <p className="text-xs text-white/30">
            © {year} SolveBytez. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}