import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  Globe,
  HeartHandshake,
  ChevronRight,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";

/* ─── animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true },
};

/* ─── data ─── */
const WHY_CARDS = [
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    text: "Enterprise-grade security practices baked into every project we deliver.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    text: "Agile sprints and lean workflows mean your product ships on time, every time.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    text: "Serving clients across 15+ countries with 24/7 support and localised solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Mindset",
    text: "We measure success by the growth and satisfaction of the businesses we serve.",
  },
];

/* ─── sub-components ─── */
function PageHero({ title, crumb }) {
  return (
    <section className="relative h-[380px] md:h-[440px] flex items-end overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80")`,
        }}
        aria-hidden="true"
      />
      
      {/* Dark Overlay - Low Opacity */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      
      {/* Original bg container with gradient (kept for consistency) */}
      <div className="absolute inset-0 bg-[#0D1B3E] mix-blend-multiply opacity-80">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1164E8]/40 via-transparent to-[#29CCFF]/20" />
        {/* grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#29CCFF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#1164E8]/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-[#29CCFF]/10 blur-2xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-6">
        <motion.div {...fadeUp(0.1)}>
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

function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`section-pad max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text, delay = 0 }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      whileHover={{ y: -6, boxShadow: "0 25px 45px rgba(17,100,232,0.15)" }}
      className="p-7 glow-hover cursor-default transition-all duration-300 border-2 border-primary rounded-2xl shadow-xl hover:shadow-2xl"
    >
      <div className="w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center mb-5 shadow-md">
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}

/* ─── main page ─── */
export default function About() {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <PageHero title="About Us" crumb="About" />

      {/* ── Company Intro ── */}
      <SectionWrapper className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        {/* Background Pattern for Mission Section */}
        <div
          className="absolute inset-0 pointer-events-none opacity-3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23104cba' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "30px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23104cba' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "30px",
          }}
          aria-hidden="true"
        />
        
        {/* LEFT */}
        <motion.div {...fadeUp(0)} className="relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px- py- rounded-full mb-2 border border-primary/20">
            IT Support For Business
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2 font-heading">
            Your Trusted Partner in{" "}
            <span className="text-gradient-primary">IT Excellence</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            We are passionate about empowering businesses with innovative IT solutions
            that drive growth, efficiency, and success. With a team of dedicated
            professionals and cutting-edge technology, we transform challenges into
            opportunities.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 italic">
            We are a dynamic IT company specialising in web &amp; mobile applications,
            digital marketing, game development, AR, VR, blockchain, and AI solutions.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Learn About More <ChevronRight size={16} />
          </Link>
        </motion.div>

        {/* RIGHT — Updated with real images instead of icons */}
        <motion.div {...fadeUp(0.2)} className="relative h-80 md:h-96 hidden lg:block z-10">
          {/* Top Left Image */}
          <div className="absolute left-0 top-0 w-64 h-68 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Bottom Right Image */}
          <div className="absolute right-0 bottom-0 w-66 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop&q=80"
              alt="Business meeting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Decorative ring */}
          <div className="absolute inset-0 m-auto w-40 h-40 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
        </motion.div>
      </SectionWrapper>

      {/* ── Mission & Vision ── */}
      <section className="bg-surface-muted relative">
        <SectionWrapper className="text-center relative z-10">
          <motion.div {...fadeUp(0)} className="mb-4">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
              IT Support For Business
            </span>
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 font-heading">
            Preparing for Your Success —{" "}
            <span className="text-gradient-primary">Trusted IT Services</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Mission */}
            <motion.div
              variants={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              className="light-card p-10 text-left transition-all duration-300 glow-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-gradient flex items-center justify-center mb-6 shadow-lg">
                <Target size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Mission of Solvebytez</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Our mission is to evolve as a global brand renowned for delivering
                cutting-edge IT solutions and fostering innovation. We are committed to:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Delivering scalable, future-proof solutions", "Fostering a culture of continuous innovation", "Building lasting partnerships with every client"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              className="card-premium p-10 text-left transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <Globe size={26} className="text-[#29CCFF]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">Vision of Solvebytez</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                We envision a future where technology bridges gaps and empowers
                individuals and organisations worldwide. By redefining the fast-evolving
                IT industry, we aim to:
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                {["Lead global digital transformation", "Empower 10,000+ businesses by 2030", "Pioneer emerging tech for real-world impact"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29CCFF] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </SectionWrapper>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="relative">
        {/* Background Pattern for Why Choose Us Section */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23104cba' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "30px",
          }}
          aria-hidden="true"
        />
        
        <SectionWrapper className="relative z-10">
          
          <motion.div {...fadeUp(0)} className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20 mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-heading">
              What Sets Us{" "}
              <span className="text-gradient-primary">Apart</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CARDS.map((card, i) => (
              <FeatureCard key={card.title} {...card} delay={i * 0.1} />
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#0D1B3E] py-10 px-6">
        <div
            className="absolute inset-0 opacity-[.1] pointer-events-none"
            style={{
              backgroundImage:
                "url('/pattern1.png')",
            }}
          />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1164E8]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#29CCFF]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#1164E8]/20 blur-2xl" />

        <motion.div
          {...fadeUp(0)}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-heading leading-tight">
            Let's Build Something{" "}
            <span className="text-[#29CCFF]">Great Together</span>
          </h2>
          <p className="text-white/60 mb-4 text-lg">
            Ready to transform your business with cutting-edge technology? Let's talk.
          </p>
          <Link to="/contact" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
            Contact Us <ChevronRight size={18} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}