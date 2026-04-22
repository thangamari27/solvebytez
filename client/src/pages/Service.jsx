import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home, ArrowRight, MessageCircle } from "lucide-react";

/* ============================================================================
   COMPONENT 1: ServiceHero
   ============================================================================ */
/**
 * ServiceHero
 * Props:
 *  - title       {string}  Main service title
 *  - breadcrumb  {string}  Label shown after "Home >" e.g. "Mobile Application"
 *  - heroImage   {string}  URL/path to background image (optional)
 *  - icon        {React.ElementType} Lucide icon component (optional)
 */
function ServiceHero({ title, breadcrumb, heroImage, icon: Icon }) {
  return (
    <section className="relative h-[380px] md:h-[460px] flex items-end overflow-hidden">
      {/* ── background ── */}
      <div
        className="absolute inset-0 bg-brand-dark"
        style={
          heroImage
            ? {
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
            : {}
        }
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-primary/40" />

        {/* animated grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#29CCFF"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* glow blobs */}
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-16 w-64 h-64 rounded-full bg-brand-cyan/10 blur-2xl pointer-events-none" />
      </div>

      {/* ── content ── */}
      <div className="relative z-10 w-full  mx-auto px-6 sm:px-8 pb-6">
        {/* breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-1.5 text-sm text-brand-cyan/70 mb-4 font-medium"
        >
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-brand-cyan transition-colors"
          >
            <Home size={13} />
            Home
          </Link>
          <ChevronRight size={13} className="text-white/30" />
          <span className="text-white/50">{breadcrumb}</span>
        </motion.div>

        {/* title row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-5"
        >
          {Icon && (
            <div className="w-14 h-14 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-xl flex-shrink-0">
              <Icon size={28} className="text-white" />
            </div>
          )}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight font-heading">
              {title}
            </h1>
            <div className="mt-3 h-1 w-16 rounded-full bg-primary-gradient" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================================
   COMPONENT 2: ServiceIntro
   ============================================================================ */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

/**
 * ServiceIntro
 * Props come from serviceData.intro:
 *  - title        {string}
 *  - subtitle     {string}  small badge label
 *  - description  {string}
 *  - image        {string}  URL/path
 *  - imageAlt     {string}
 *  - badge        {string}  (optional overrides subtitle)
 */
function ServiceIntro({ title, subtitle, description, image, imageAlt = "Service illustration" }) {
  return (
    <section className="section-pad bg-white">
      <div className=" mx-auto">
        {/* centered header */}
        <motion.div {...fadeUp(0)} className="text-center mb-6">
          {subtitle && (
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20 mb-4">
              {subtitle}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark font-heading leading-tight">
            {title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-primary-gradient" />
        </motion.div>

        {/* two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — text */}
          <motion.div {...fadeUp(0.1)} className="space-y-5">
            {Array.isArray(description) ? (
              description.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-[15px]">
                  {para}
                </p>
              ))
            ) : (
              <p className="text-gray-600 leading-relaxed text-[15px]">{description}</p>
            )}
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            {...fadeUp(0.2)}
            className="relative flex justify-center"
          >
            {/* decorative glow behind image */}
            <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-surface-border max-w-md w-full"
            >
              {image ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-brand-dark to-primary flex items-center justify-center">
                  <span className="text-white/30 text-sm">Image placeholder</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   COMPONENT 3: ServiceSection
   ============================================================================ */
const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" },
});

/**
 * ServiceSection — reusable alternating block
 *
 * Props:
 *  - index       {number}   0-based; even = text-left/image-right, odd = image-left/text-right
 *  - title       {string}
 *  - description {string | string[]}  paragraph(s)
 *  - features    {string[]}  optional bullet list of sub-features
 *  - image       {string}   URL/path
 *  - imageAlt    {string}
 *  - tag         {string}   small badge text (optional)
 *  - cta         {string}   CTA button label (optional)
 *  - onCtaClick  {function} CTA handler (optional)
 */
function ServiceSection({
  index = 0,
  title,
  description,
  features = [],
  image,
  imageAlt = "Service feature",
  tag,
  cta,
  onCtaClick,
}) {
  const isEven = index % 2 === 0; // true → text left | image right
  const isDark = index % 3 === 1; // every 3rd section gets muted bg

  const textMotion = isEven ? fadeLeft(0) : fadeRight(0);
  const imageMotion = isEven ? fadeRight(0.1) : fadeLeft(0.1);

  const ImageBlock = (
    <motion.div
      {...imageMotion}
      className="relative flex justify-center items-center"
    >
      <div className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <motion.div
        whileHover={{ scale: 1.04, rotate: 0.5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-surface-border w-full max-w-[440px] h-[280px]"
      >
        {image ? (
          <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
        ) : (
          /* placeholder when no image provided */
          <div className="w-full h-64 bg-gradient-to-br from-brand-dark to-primary flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 mx-auto mb-3 flex items-center justify-center">
                <span className="text-white/50 text-2xl font-bold font-heading">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <span className="text-white/30 text-xs">Image placeholder</span>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );

  const TextBlock = (
    <motion.div {...textMotion} className="flex flex-col justify-center gap-5">
      {tag && (
        <span className="inline-block self-start text-xs font-bold tracking-widest uppercase text-primary bg-primary/8 px-4 py-1.5 rounded-full border border-primary/20">
          {tag}
        </span>
      )}

      <h3 className="text-2xl md:text-3xl font-extrabold text-dark font-heading leading-snug">
        {title}
      </h3>

      {/* description */}
      {Array.isArray(description) ? (
        description.map((p, i) => (
          <p key={i} className="text-gray-600 leading-relaxed text-[15px]">
            {p}
          </p>
        ))
      ) : (
        <p className="text-gray-600 leading-relaxed text-[15px]">{description}</p>
      )}

      {/* optional bullet features */}
      {features.length > 0 && (
        <ul className="space-y-2 mt-1">
          {features.map((feat, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="flex items-start gap-3 text-sm text-gray-600"
            >
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-gradient flex-shrink-0" />
              {feat}
            </motion.li>
          ))}
        </ul>
      )}

      {/* optional CTA */}
      {cta && (
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onCtaClick}
          className="btn-primary self-start mt-2 flex items-center gap-2"
        >
          {cta} <ChevronRight size={16} />
        </motion.button>
      )}
    </motion.div>
  );

  return (
    <section className={`section-pad ${isDark ? "bg-surface-muted" : "bg-white"}`}>
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {isEven ? (
            <>
              {TextBlock}
              {ImageBlock}
            </>
          ) : (
            <>
              {ImageBlock}
              {TextBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   COMPONENT 4: ServiceCTA
   ============================================================================ */
/**
 * ServiceCTA
 * Props:
 *  - heading      {string}   main CTA heading (optional)
 *  - subtext      {string}   supporting line (optional)
 *  - primaryLabel {string}   primary button text (default: "Get a Free Quote")
 *  - primaryLink  {string}   primary link path (default: "/contact")
 *  - secondaryLabel {string} secondary button label (optional)
 *  - secondaryLink  {string} secondary link path (optional)
 */
function ServiceCTA({
  heading = "Ready to Build Something Exceptional?",
  subtext = "Let's turn your idea into a world-class digital product. Our team is ready when you are.",
  primaryLabel = "Get a Free Quote",
  primaryLink = "/contact",
  secondaryLabel = "Chat on WhatsApp",
  secondaryLink = "https://wa.me/919599179795",
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-8 px-6">
      {/* bg effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-brand-cyan/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-cyan/10 blur-2xl pointer-events-none" />

      {/* animated grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#29CCFF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* pill badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block text-xs font-bold tracking-widest uppercase text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-4 py-1.5 rounded-full mb-6"
        >
          Let's Get Started
        </motion.span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 font-heading">
          {heading.split(" ").map((word, i) =>
            ["Exceptional?", "Together", "Great"].includes(word) ? (
              <span key={i} className="text-brand-cyan"> {word}</span>
            ) : (
              <span key={i}> {word}</span>
            )
          )}
        </h2>

        <p className="text-white/55 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              to={primaryLink}
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
            >
              {primaryLabel} <ArrowRight size={18} />
            </Link>
          </motion.div>

          {secondaryLabel && (
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href={secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold hover:bg-white/5 transition-all text-base"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                {secondaryLabel}
              </a>
            </motion.div>
          )}
        </div>

        {/* trust line */}
        <p className="mt-8 text-white/25 text-xs">
          No commitment required · 100% free consultation · Responds within 2 hours
        </p>
      </motion.div>
    </section>
  );
}

/* ============================================================================
   MAIN EXPORT: ServicePage
   ============================================================================ */
/**
 * ServicePage — main wrapper
 *
 * Accepts a single `data` prop matching the serviceData shape.
 * See /data/servicesData.js for the full schema.
 *
 * Usage:
 *   import { mobileAppData } from "@/data/servicesData";
 *   <ServicePage data={mobileAppData} />
 */
export default function Service({ data }) {
  if (!data) return null;

  const {
    title,
    breadcrumb,
    heroImage,
    heroIcon,
    intro,
    sections = [],
    cta,
  } = data;

  return (
    <main className="bg-white overflow-x-hidden">
      {/* ── 1. Hero ── */}
      <ServiceHero
        title={title}
        breadcrumb={breadcrumb}
        heroImage={heroImage}
        icon={heroIcon}
      />

      {/* ── 2. Intro ── */}
      {/* {intro && (
        <ServiceIntro
          title={intro.title}
          subtitle={intro.subtitle}
          description={intro.description}
          image={intro.image}
          imageAlt={intro.imageAlt}
        />
      )} */}

      {/* ── 3. Feature sections (alternating) ── */}
      {sections.map((section, i) => (
        <ServiceSection
          key={`${data.title}-section-${i}`}
          index={i}
          title={section.title}
          description={section.description}
          features={section.features || []}
          image={section.image}
          imageAlt={section.imageAlt}
          tag={section.tag}
          cta={section.cta}
          onCtaClick={section.onCtaClick}
        />
      ))}

      {/* ── 4. CTA strip ── */}
      <ServiceCTA
        heading={cta?.heading}
        subtext={cta?.subtext}
        primaryLabel={cta?.primaryLabel}
        primaryLink={cta?.primaryLink}
        secondaryLabel={cta?.secondaryLabel}
        secondaryLink={cta?.secondaryLink}
      />
    </main>
  );
}