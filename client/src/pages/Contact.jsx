import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Send,
  MessageCircle,
} from "lucide-react";

/* ─── animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

/* ─── Contact Info data ─── */
const INFO = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-9599179795",
    href: "tel:+919599179795",
  },
  {
    icon: Mail,
    label: "Write to Us",
    value: "solvebytez@gmail.com",
    href: "mailto:solvebytez@gmail.com",
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "Rahul Vihar 2, Pratap Vihar, Sector 12, Ghaziabad 201009, Uttar Pradesh",
    href: "#map",
  },
];

const SERVICES = [
  "Select a Service",
  "Web Application",
  "Mobile Application",
  "Digital Marketing",
  "Augmented Reality (AR)",
  "Virtual Reality (VR)",
  "Game Development",
  "Blockchain Technology",
  "AI-Powered Solutions",
  "UI/UX Design",
];

/* ─── Sub-components ─── */
function PageHero({ title, crumb }) {
  return (
    <section className="relative h-[380px] md:h-[440px] flex items-end overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1707388865290-8ac993cae951?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
        aria-hidden="true"
      />
      
      {/* Dark Overlay - Low Opacity */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      
      {/* Original bg container with gradient (kept for consistency) */}
      <div className="absolute inset-0 bg-[#0D1B3E] mix-blend-multiply opacity-80">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1164E8]/40 via-transparent to-[#29CCFF]/20" />
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#29CCFF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" />
        </svg>
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#1164E8]/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-[#29CCFF]/10 blur-2xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 text-sm text-[#29CCFF]/80 mb-3 font-medium">
            <Link to="/" className="hover:text-[#29CCFF] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/60">{crumb}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight font-heading">
            {title}
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary-gradient" />
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";

  return (
    <motion.div {...fadeUp(0)} className="light-card p-8 md:p-10 h-full">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-7 font-heading">
        Get In Touch
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={inputBase}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="company@example.com"
              required
              className={inputBase}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 00000 00000"
              className={inputBase}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Service Required
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`${inputBase} cursor-pointer`}
            >
              {SERVICES.map((s) => (
                <option key={s} value={s === "Select a Service" ? "" : s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Let us know what you need…"
            required
            className={`${inputBase} resize-none`}
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-base"
        >
          {sent ? "Message Sent ✓" : (
            <>
              Send Message <Send size={16} />
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

function InfoCard() {
  return (
    <motion.div
      {...fadeUp(0.15)}
      className="card-premium p-8 md:p-10 h-full flex flex-col gap-8"
    >
      <div>
        <h2 className="text-2xl font-extrabold text-white mb-2 font-heading">
          Don't Hesitate to{" "}
          <span className="text-[#29CCFF]">Contact Us</span>
        </h2>
        <p className="text-white/50 text-sm leading-relaxed">
          Our team is always ready to help. Reach out through any of the
          channels below and we'll get back to you promptly.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {INFO.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-start gap-4 group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#29CCFF]/10 border border-[#29CCFF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#29CCFF]/20 transition-colors duration-200">
              <Icon size={18} className="text-[#29CCFF]" />
            </div>
            <div>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-0.5">
                {label}
              </p>
              <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* decorative divider */}
      <div className="section-divider mt-auto" />

      <p className="text-white/30 text-xs text-center">
        Typically responds within 2 business hours.
      </p>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function Contact() {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <PageHero title="Contact Us" crumb="Contact" />

      {/* ── Contact Section ── */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          {/* header */}
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20 mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-heading">
              We'd Love to{" "}
              <span className="text-gradient-primary">Hear From You</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Whether you have a project in mind or just want to explore
              possibilities — our door is always open.
            </p>
          </motion.div>

          {/* two-column */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-stretch">
            <ContactForm />
            <InfoCard />
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="bg-surface-muted py-16 px-6">
        <motion.div {...fadeUp(0)} className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-gray-900 font-heading">
              Find Us on the Map
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Rahul Vihar 2, Pratap Vihar, Sector 12, Ghaziabad — UP
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80">
            <iframe
              title="Solvebytez Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0!2d77.4!3d28.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzEyLjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}