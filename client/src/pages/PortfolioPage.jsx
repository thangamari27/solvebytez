import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Search } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const CATEGORIES = ["All", "Web Development", "E-Commerce", "Mobile App", "UI/UX Design", "Digital Marketing"];

const PROJECTS = [
  {
    id: 1,
    title: "Make My Canvas",
    category: "E-Commerce",
    description: "Canvas print store with custom frame builder and Razorpay checkout.",
    tech: ["React", "Node.js", "MongoDB", "Razorpay"],
    gradient: "linear-gradient(135deg,#0f2862 0%,#1164E8 60%,#29CCFF 100%)",
    image: "p1.png",
    liveUrl: "https://makemycanvas.in/",
    client: "Make My Canvas",
    year: "2024",
    fullDesc: "A full-featured photo-print marketplace supporting 50+ product variants, custom sizing, and a drag-and-drop collage builder. Integrated real-time inventory sync and automated order fulfilment emails.",
  },
  {
    id: 2,
    title: "Sell Shopee",
    category: "E-Commerce",
    description: "B2B wholesale platform with bulk pricing tiers and GST invoicing.",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "WhatsApp API"],
    gradient: "linear-gradient(135deg,#0a1a3e 0%,#1c3fa8 60%,#5b8af5 100%)",
    image: "/p2.png",
    liveUrl: "https://www.sellshopee.com/",
    client: "Sell Shopee",
    year: "2024",
    fullDesc: "Wholesale ordering portal catering to 500+ retail buyers daily. Features dynamic pricing grids, automated GST invoice generation, and a WhatsApp-first notification system reducing cart abandonment by 34%.",
  },
  {
    id: 3,
    title: "Seven Stars Cash & Carry",
    category: "E-Commerce",
    description: "Hyperlocal grocery delivery with real-time inventory and slot booking.",
    tech: ["React Native", "Firebase", "Stripe", "Redux"],
    gradient: "linear-gradient(135deg,#0d3b1a 0%,#1a7a36 60%,#29CCFF 100%)",
    image: "/p3.png",
    liveUrl: "https://sevenstarscashandcarry.co.uk/",
    client: "Seven Stars",
    year: "2023",
    fullDesc: "Hyperlocal grocery platform serving 1,200+ daily orders across 3 cities. Built real-time inventory management, 2-hour slot delivery booking, and a gamified loyalty programme that boosted repeat purchases by 28%.",
  },
  {
    id: 4,
    title: "Blanq Canvas",
    category: "Web Development",
    description: "UK-based canvas store with custom printing and Shopify integration.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS3"],
    gradient: "linear-gradient(135deg,#1a0a3e 0%,#5c1ab8 60%,#c47aff 100%)",
    image: "/p4.png",
    liveUrl: "https://blanqcanvas.co.uk/",
    client: "Blanq Canvas",
    year: "2023",
    fullDesc: "Premium canvas printing store with custom size options, framing choices, and Shopify theme achieving 92/100 Lighthouse performance score.",
  },
  {
    id: 5,
    title: "Eliquid Samples",
    category: "E-Commerce",
    description: "UK-based vape sample store with age-gate and subscription bundles.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "linear-gradient(135deg,#3b0a1a 0%,#a81c4f 60%,#ff6ba8 100%)",
    image: "/p5.png",
    liveUrl: "https://eliquidsamples.co.uk/",
    client: "Eliquid Samples",
    year: "2024",
    fullDesc: "Regulatory-compliant UK e-liquid store with GDPR-ready age verification, subscription sample boxes, and a custom theme with high performance scores.",
  },
  {
    id: 6,
    title: "Fashionista Global",
    category: "UI/UX Design",
    description: "Editorial-style lookbook with parallax scroll and seasonal drops.",
    tech: ["React", "GSAP", "Sanity CMS", "Vercel"],
    gradient: "linear-gradient(135deg,#0a2e0a 0%,#1a6b1a 60%,#5ecf5e 100%)",
    image: "/p6.png",
    liveUrl: "https://fashionistaglobal.com/",
    client: "Fashionista Global",
    year: "2023",
    fullDesc: "Award-nominated fashion portal featuring scroll-driven cinematic lookbooks, AI-powered size matching, and a headless Sanity CMS enabling weekly drop campaigns without developer intervention.",
  },
  {
    id: 7,
    title: "JARC India",
    category: "Web Development",
    description: "NGO donation platform with recurring payments and impact tracker.",
    tech: ["Vue.js", "Laravel", "MySQL", "Cashfree"],
    gradient: "linear-gradient(135deg,#1a1205 0%,#7a5c10 60%,#d4a843 100%)",
    image: "/p7.png",
    liveUrl: "https://jarcindia.com/",
    client: "JARC India",
    year: "2024",
    fullDesc: "Full-stack donation platform processing ₹40L+ annually. Features recurring SIP donations, automated 80G tax certificates, live impact dashboards for donors, and a volunteer management CRM.",
  },
  {
    id: 8,
    title: "JSKS Telecom",
    category: "Web Development",
    description: "Telecom service provider website with product catalog and inquiry system.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    gradient: "linear-gradient(135deg,#1a0e05 0%,#7a3e10 60%,#c87941 100%)",
    image: "/p8.png",
    liveUrl: "https://jskstelecom.com/",
    client: "JSKS Telecom",
    year: "2023",
    fullDesc: "Telecom service provider platform with product catalog, service inquiry system, and customer support integration.",
  },
  {
    id: 9,
    title: "Kiddie Mama",
    category: "E-Commerce",
    description: "Kids products store with age-based product filtering.",
    tech: ["React", "Firebase", "Tailwind", "Stripe"],
    gradient: "linear-gradient(135deg,#0a1f3e 0%,#1560a8 60%,#5ec8ff 100%)",
    image: "/p9.png",
    liveUrl: "https://kiddiemama.store/",
    client: "Kiddie Mama",
    year: "2024",
    fullDesc: "Kids products e-commerce platform with age-based product recommendations, gift guides, and secure checkout.",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

/* ---- Hero - Updated with About Page Style ---- */
function PortfolioHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  return (
    <section className=" relative h-[380px] md:h-[440px] flex items-end overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80")`,
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
            <pattern id="grid-portfolio" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#29CCFF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-portfolio)" />
        </svg>
        {/* blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#1164E8]/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-[#29CCFF]/10 blur-2xl" />
      </div>

      <div className="relative z-10 w-full  mx-auto px-6 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 text-sm text-[#29CCFF]/80 mb-3 font-medium">
            <Link to="/" className="hover:text-[#29CCFF] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight font-heading">
            Our{" "}
            <span className="bg-gradient-to-r from-[#29CCFF] to-[#1164E8] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary-gradient" />
          <p className="text-white/70 text-lg max-w-2xl mt-4">
            Showcasing our latest work — from scalable web platforms to immersive mobile experiences that drive real business results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---- Filter ---- */
function PortfolioFilter({ active, onChange }) {
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center",
      padding: "48px 24px 0",
    }}>
      {CATEGORIES.map(c => {
        const isActive = c === active;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            style={{
              padding: "9px 22px",
              borderRadius: 999,
              border: isActive ? "none" : "1.5px solid #e2e8f0",
              background: isActive
                ? "linear-gradient(135deg,#29CCFF 0%,#1164E8 100%)"
                : "#fff",
              color: isActive ? "#fff" : "#4b5563",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              transition: "all 0.22s ease",
              boxShadow: isActive ? "0 4px 20px rgba(17,100,232,0.3)" : "none",
              transform: isActive ? "scale(1.04)" : "scale(1)",
            }}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}

/* ---- Project Card ---- */
function ProjectCard({ project, onClick, style }) {
  const [hovered, setHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        background: "#fff",
        boxShadow: hovered
          ? "0 20px 60px rgba(17,100,232,0.16), 0 4px 16px rgba(0,0,0,0.06)"
          : "0 4px 24px rgba(0,0,0,0.07)",
        overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(.22,1,.36,1)",
        border: "5px solid #f0f4ff",
        ...style,
      }}
    >
      {/* Image area */}
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.5s cubic-bezier(.22,1,.36,1)",
            }}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div style={{
            position: "absolute", inset: 0,
            background: project.gradient,
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(.22,1,.36,1)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {/* Decorative pattern */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`dots${project.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#dots${project.id})`} />
            </svg>
            <div style={{
              fontSize: 52, filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.3))",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}><Search /></div>
          </div>
        )}

        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg,rgba(7,21,66,0.0) 0%,rgba(7,21,66,0.85) 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
          display: "flex", alignItems: "flex-end", padding: 16,
        }}>
          <button style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 999, color: "#fff", fontWeight: 700,
            fontSize: 14, padding: "8px 22px", cursor: "pointer",
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            transform: hovered ? "translateY(0)" : "translateY(12px)",
            transition: "transform 0.35s cubic-bezier(.22,1,.36,1)",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <span>View Project</span>
            <span style={{ fontSize: 16 }}>→</span>
          </button>
        </div>

        {/* Category badge */}
        <div style={{
          position: "absolute", top: 14, right: 14,
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 999, padding: "4px 12px",
          fontSize: 11, fontWeight: 600,
          color: "#fff", letterSpacing: "0.04em",
          fontFamily: "'Plus Jakarta Sans',sans-serif",
        }}>
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 22px" }}>
        <h3 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontSize: 17, fontWeight: 800,
          color: "#0a0a0a", margin: "0 0 8px",
        }}>{project.title}</h3>
        <p style={{
          fontSize: 14, color: "#6b7280",
          margin: "0 0 16px", lineHeight: 1.6,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{project.description}</p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.slice(0, 3).map(t => (
            <span key={t} style={{
              fontSize: 11, fontWeight: 600,
              background: "#eff6ff", color: "#1164E8",
              borderRadius: 6, padding: "4px 10px",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              letterSpacing: "0.02em",
            }}>{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span style={{
              fontSize: 11, fontWeight: 600,
              background: "#f1f5f9", color: "#64748b",
              borderRadius: 6, padding: "4px 10px",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>+{project.tech.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---- Project Grid ---- */
function ProjectGrid({ category }) {
  const [ref, visible] = useInView(0.05);
  const filtered = category === "All" ? PROJECTS : PROJECTS.filter(p => p.category === category);
  const [modal, setModal] = useState(null);

  return (
    <>
      <section ref={ref} style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 80px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#9ca3af" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}><Search className="w-8 h-8 inline-block text-black text-center" /></div>
            <p style={{ fontSize: 16 }}>No projects in this category yet.</p>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
            gap: 28,
          }}>
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                onClick={setModal}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.6s cubic-bezier(.22,1,.36,1) ${i * 0.07}s, transform 0.6s cubic-bezier(.22,1,.36,1) ${i * 0.07}s, box-shadow 0.35s ease, transform 0.35s ease`,
                }}
              />
            ))}
          </div>
        )}
      </section>

      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </>
  );
}

/* ---- Modal ---- */
function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 20);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: `rgba(4,14,46,${mounted ? 0.75 : 0})`,
        backdropFilter: "blur(6px)",
        transition: "background 0.35s ease",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px 16px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 24,
          width: "100%", maxWidth: 680,
          maxHeight: "90vh",
          overflow: "auto",
          boxShadow: "0 32px 80px rgba(0,0,0,0.25)",
          transform: mounted ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
          opacity: mounted ? 1 : 0,
          transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
        }}
      >
        {/* Header visual with project image */}
        <div style={{
          height: 240,
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px 24px 0 0",
        }}>
          {/* Background gradient fallback */}
          <div style={{
            position: "absolute", inset: 0,
            background: project.gradient,
            zIndex: 0,
          }} />

          {/* Project Image */}
          {!imageError && project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                position: "relative",
                zIndex: 1,
              }}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div style={{
              position: "absolute", inset: 0,
              background: project.gradient,
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 1,
            }}>
              {/* Decorative pattern */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="mGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mGrid)" />
              </svg>
              <div style={{ fontSize: 72, filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.3))", position: "relative" }}>
                {project.icon || "🚀"}
              </div>
            </div>
          )}

          {/* Dark overlay for better text visibility */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)",
            zIndex: 2,
          }} />

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 16, right: 16,
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff", fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              lineHeight: 1,
              zIndex: 3,
            }}
          >×</button>

          {/* Category and Year badges */}
          <div style={{
            position: "absolute", bottom: 16, left: 20,
            display: "flex", gap: 8,
            zIndex: 3,
          }}>
            <span style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 999, padding: "4px 14px",
              fontSize: 12, fontWeight: 600, color: "#fff",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>{project.category}</span>
            <span style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 999, padding: "4px 14px",
              fontSize: 12, fontWeight: 600, color: "#fff",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>{project.year}</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "28px 32px 36px" }}>
          <div style={{ marginBottom: 6, fontSize: 13, color: "#1164E8", fontWeight: 600, letterSpacing: "0.05em", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            CLIENT: {project.client.toUpperCase()}
          </div>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            fontSize: "clamp(1.4rem,3vw,1.8rem)",
            fontWeight: 800, color: "#0a0a0a",
            margin: "0 0 16px",
          }}>{project.title}</h2>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75, margin: "0 0 24px" }}>
            {project.fullDesc}
          </p>

          {/* Tech stack */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", letterSpacing: "0.08em", marginBottom: 10, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              TECH STACK
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  fontSize: 13, fontWeight: 600,
                  background: "#eff6ff", color: "#1164E8",
                  border: "1px solid #dbeafe",
                  borderRadius: 8, padding: "6px 14px",
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 28px", borderRadius: 999,
                background: "linear-gradient(135deg,#29CCFF 0%,#1164E8 100%)",
                color: "#fff", fontWeight: 700, fontSize: 14,
                textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif",
                boxShadow: "0 4px 20px rgba(17,100,232,0.35)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(17,100,232,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(17,100,232,0.35)"; }}
            >
              <span>View Live Project</span>
              <span>↗</span>
            </a>
            <button
              onClick={onClose}
              style={{
                padding: "12px 28px", borderRadius: 999,
                background: "transparent",
                border: "1.5px solid #e2e8f0",
                color: "#374151", fontWeight: 600, fontSize: 14,
                cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#f8fafc"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- CTA Section - Updated with Pattern Image ---- */
function CTASection() {
  const [ref, visible] = useInView();
  const [hBtn, setHBtn] = useState(false);

  return (
    <section ref={ref} className="relative overflow-hidden py-8 px-6" style={{
      background: "linear-gradient(120deg,#030d2e 0%,#071542 50%,#0d2260 100%)",
    }}>
      {/* Background Pattern Image */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2329CCFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "30px",
        }}
        aria-hidden="true"
      />

      {/* Orbs */}
      {[
        { s: 500, top: "-200px", left: "-200px", c: "rgba(41,204,255,0.12)" },
        { s: 400, bottom: "-150px", right: "-120px", c: "rgba(17,100,232,0.18)" },
      ].map((o, i) => (
        <div key={i} style={{
          position: "absolute",
          width: o.s, height: o.s,
          top: o.top, left: o.left, bottom: o.bottom, right: o.right,
          borderRadius: "50%", background: o.c, filter: "blur(100px)",
          pointerEvents: "none",
        }} />
      ))}

      {/* Grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ctaGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ctaGrid)" />
      </svg>

      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 700, margin: "0 auto", textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1)",
      }}>
        {/* Pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(41,204,255,0.1)",
          border: "1px solid rgba(41,204,255,0.25)",
          borderRadius: 999, padding: "7px 18px", marginBottom: 28,
        }}>
          <span style={{ fontSize: 13, color: "#29CCFF", fontWeight: 600, letterSpacing: "0.06em", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            LET'S BUILD TOGETHER
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontSize: "clamp(1.8rem,4.5vw,3rem)",
          fontWeight: 800, color: "#fff",
          margin: "0 0 20px", lineHeight: 1.2,
        }}>
          Have a project{" "}
          <span style={{
            background: "linear-gradient(90deg,#29CCFF,#1164E8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>in mind?</span>
        </h2>
        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7, margin: "0 0 40px",
        }}>
          Let's turn your vision into a high-performing digital product. Our team is ready to help you build something remarkable.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            to="/contact"
            onMouseEnter={() => setHBtn(true)}
            onMouseLeave={() => setHBtn(false)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "15px 36px", borderRadius: 999,
              background: "linear-gradient(135deg,#29CCFF 0%,#1164E8 100%)",
              color: "#fff", fontWeight: 700, fontSize: 16,
              border: "none", cursor: "pointer",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              boxShadow: hBtn ? "0 8px 32px rgba(41,204,255,0.4)" : "0 4px 20px rgba(17,100,232,0.4)",
              transform: hBtn ? "scale(1.04) translateY(-2px)" : "scale(1)",
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
          >
            <span>Start Your Project</span>
            <span style={{ fontSize: 18 }}>→</span>
          </Link>
          <Link
            to="/services/mobile-app"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "15px 36px", borderRadius: 999,
              background: "rgba(255,255,255,0.07)",
              border: "1.5px solid rgba(255,255,255,0.2)",
              color: "#fff", fontWeight: 600, fontSize: 16,
              cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif",
              transition: "all 0.25s ease",
              textDecoration: "none",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
          >
            <span>View Services</span>
          </Link>
        </div>

        {/* Trust indicators */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 24,
          justifyContent: "center", marginTop: 48,
        }}>
          {["Fast Delivery", "NDA Protected", "Post-launch Support", "Global Clients"].map(t => (
            <span key={t} style={{
              fontSize: 13, color: "rgba(255,255,255,0.55)",
              fontWeight: 500, fontFamily: "'Plus Jakarta Sans',sans-serif",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ─────────────────────────────────────────────────────────────────── */
export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div style={{ fontFamily: "'Inter',sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <PortfolioHero />

      {/* Filter + Grid wrapper — white bg */}
      <div style={{ background: "#fff", paddingBottom: 0 }}>
        <PortfolioFilter active={activeFilter} onChange={setActiveFilter} />

        {/* Result count */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px 0" }}>
          <p style={{ fontSize: 14, color: "#9ca3af", fontWeight: 500 }}>
            {activeFilter === "All" ? PROJECTS.length : PROJECTS.filter(p => p.category === activeFilter).length} project{activeFilter === "All" || PROJECTS.filter(p => p.category === activeFilter).length !== 1 ? "s" : ""} found
          </p>
        </div>

        <ProjectGrid category={activeFilter} />
      </div>

      <CTASection />
    </div>
  );
}