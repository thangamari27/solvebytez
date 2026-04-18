/**
 * servicesData.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for ALL service pages.
 * All images are from Unsplash - high quality, royalty-free, content-relevant
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ─────────────────────── 1. MOBILE APPLICATION ─────────────────────── */
export const mobileAppData = {
  title: "Mobile Application Development",
  breadcrumb: "Mobile Application",
  heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&auto=format&fit=crop&q=80",

  intro: {
    subtitle: "Our Services",
    title: "Mobile Application Development",
    description: [
      "We specialise in designing and developing cutting-edge mobile applications that deliver seamless experiences and empower businesses to connect with their audience like never before.",
      "From concept to deployment, our mobile team brings deep cross-platform and native expertise to every project.",
    ],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Mobile app development on multiple devices",
  },

  sections: [
    {
      tag: "Custom Development",
      title: "Custom Mobile App Development",
      description:
        "We create bespoke mobile applications tailored to your specific business needs, ensuring functionality, scalability, and a superior user experience on both iOS and Android.",
      features: [
        "Tailored to your unique business workflow",
        "Scalable architecture from MVP to enterprise",
        "End-to-end development — design to deployment",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80",
      imageAlt: "Custom mobile apps development",
    },
    {
      tag: "Cross-Platform",
      title: "Cross-Platform App Development",
      description:
        "Build apps that work seamlessly across iOS and Android platforms using technologies like Flutter and React Native, saving time and costs without compromising performance.",
      features: [
        "Single codebase, dual-platform deployment",
        "Flutter & React Native specialists",
        "Near-native performance & UI fidelity",
      ],
      image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Cross-platform development",
    },
    {
      tag: "Native Apps",
      title: "Native App Development",
      description:
        "Maximise the power of iOS and Android with feature-rich native applications designed for optimal performance and user satisfaction. Ideal for complex, performance-critical products.",
      features: [
        "Swift / SwiftUI for iOS",
        "Kotlin / Jetpack Compose for Android",
        "Platform-specific UX patterns",
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Native apps development",
    },
    {
      tag: "Enterprise Mobility",
      title: "Enterprise Mobility Solutions",
      description:
        "Transform your business operations with enterprise-grade mobile solutions that streamline processes, enhance productivity, and improve communication across teams.",
      features: [
        "MDM & device management integration",
        "Secure enterprise data handling",
        "Backend & ERP integration",
      ],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Enterprise mobility solutions",
    },
    {
      tag: "UI/UX & Gaming",
      title: "Mobile App UI/UX Design & Game Development",
      description: [
        "Engage your users with intuitive and visually appealing designs that prioritise user experience at every touchpoint.",
        "From casual games to advanced AR/VR-enabled experiences, we create immersive mobile games that captivate users and stand out in the market.",
      ],
      features: [
        "User research & wireframing",
        "Prototyping & usability testing",
        "Unity & Unreal Engine for mobile games",
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Mobile UI/UX and game design",
    },
  ],

  cta: {
    heading: "Ready to Launch Your Mobile App?",
    subtext: "From idea to App Store — we handle everything. Let's build your next mobile product together.",
    primaryLabel: "Start Your Project",
    primaryLink: "/contact",
  },
};

/* ─────────────────────── 2. WEB APPLICATION ─────────────────────── */
export const webAppData = {
  title: "Web Application Development",
  breadcrumb: "Web Application",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80",

  intro: {
    subtitle: "Our Services",
    title: "Web Application Development",
    description: [
      "We build powerful, scalable web applications that drive business growth. From dynamic SaaS platforms to enterprise portals, our web team delivers end-to-end solutions.",
      "Every application is crafted with performance, security, and user experience at the core.",
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Web application development",
  },

  sections: [
    {
      tag: "Full-Stack",
      title: "Full-Stack Web Development",
      description:
        "Our full-stack developers handle everything from pixel-perfect frontends to robust backend architectures — delivering cohesive, high-performing web experiences.",
      features: ["React, Next.js, Vue frontends", "Node.js, Laravel, Django backends", "RESTful & GraphQL APIs"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Full-stack development",
    },
    {
      tag: "E-Commerce",
      title: "E-Commerce Solutions",
      description:
        "Launch and scale your online store with custom e-commerce platforms built for conversion, reliability, and growth. Integrated payments, inventory, and analytics included.",
      features: ["Shopify, WooCommerce, custom builds", "Payment gateway integration", "Conversion-optimised UX"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
      imageAlt: "E-commerce solutions",
    },
    {
      tag: "SaaS Platforms",
      title: "SaaS Product Development",
      description:
        "We architect and build multi-tenant SaaS products from the ground up — subscription models, dashboards, role management, and the infrastructure to scale globally.",
      features: ["Multi-tenant architecture", "Subscription billing & usage metering", "Admin dashboards & analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      imageAlt: "SaaS development",
    },
  ],

  cta: {
    heading: "Let's Build Your Web Platform",
    subtext: "Tell us what you need — we'll design, develop, and deploy a web solution that scales.",
    primaryLabel: "Get a Free Quote",
    primaryLink: "/contact",
  },
};

/* ─────────────────────── 3. DIGITAL MARKETING ─────────────────────── */
export const digitalMarketingData = {
  title: "Digital Marketing",
  breadcrumb: "Digital Marketing",
  heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&auto=format&fit=crop&q=80",

  intro: {
    subtitle: "Our Services",
    title: "Digital Marketing Solutions",
    description:
      "We craft data-driven digital marketing strategies that increase visibility, drive qualified traffic, and convert leads into loyal customers. From SEO to social media, we cover every channel.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Digital marketing",
  },

  sections: [
    {
      tag: "SEO",
      title: "Search Engine Optimisation",
      description:
        "Dominate search rankings with our technical and content-driven SEO strategies. We conduct in-depth audits, keyword research, and on-page/off-page optimisation to boost organic growth.",
      features: ["Technical SEO audits", "Keyword strategy & content optimisation", "Link building & authority growth"],
      image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=800&auto=format&fit=crop&q=80",
      imageAlt: "SEO",
    },
    {
      tag: "PPC & Ads",
      title: "Paid Advertising (PPC)",
      description:
        "Maximise ROI with precisely targeted Google Ads, Meta Ads, and LinkedIn campaigns. Our PPC specialists continuously optimise bids and creatives to lower CPA and increase conversions.",
      features: ["Google & Meta Ads management", "A/B testing & ad creative design", "Conversion tracking & reporting"],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=80",
      imageAlt: "PPC advertising",
    },
    {
      tag: "Social Media",
      title: "Social Media Marketing",
      description:
        "Build your brand presence, engage your audience, and grow followers across Instagram, LinkedIn, Facebook, and more with strategic content calendars and community management.",
      features: ["Content calendar & creative production", "Community management", "Influencer outreach"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Social media marketing",
    },
  ],

  cta: {
    heading: "Ready to Grow Your Brand Online?",
    subtext: "Let's craft a marketing strategy that brings real, measurable results.",
    primaryLabel: "Talk to a Strategist",
    primaryLink: "/contact",
  },
};

/* ─────────────────────── 4. GAME DEVELOPMENT ─────────────────────── */
export const gameDevelopmentData = {
  title: "Game Development",
  breadcrumb: "Game Development",
  heroImage: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1600&auto=format&fit=crop&q=80",

  intro: {
    subtitle: "Our Services",
    title: "Game Development",
    description:
      "From casual mobile titles to immersive AR/VR experiences, our game development studio builds captivating games that engage, entertain, and retain players across all platforms.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Game development",
  },

  sections: [
    {
      tag: "Mobile Games",
      title: "Mobile Game Development",
      description:
        "We design and develop high-quality mobile games for iOS and Android — from hyper-casual titles to complex RPGs — optimised for engagement and monetisation.",
      features: ["Unity & Unreal Engine", "In-app purchase & ad monetisation", "Analytics & live-ops integration"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Mobile game development",
    },
    {
      tag: "PC & Console",
      title: "PC & Console Games",
      description:
        "Our team builds immersive PC and console gaming experiences with rich narratives, fluid gameplay mechanics, and stunning visuals that set new standards.",
      features: ["Unreal Engine 5 specialists", "Multi-platform publishing (Steam, Epic)", "Multiplayer & online infrastructure"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
      imageAlt: "PC and console games",
    },
    {
      tag: "AR/VR Games",
      title: "AR & VR Gaming Experiences",
      description:
        "Push the boundaries of reality with our augmented and virtual reality game development. From spatial computing to haptic interaction — we build the next frontier.",
      features: ["Meta Quest, Apple Vision Pro", "Spatial audio & haptic feedback", "Training simulations & gamification"],
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop&q=80",
      imageAlt: "AR/VR games",
    },
  ],

  cta: {
    heading: "Let's Build Your Next Hit Game",
    subtext: "Concept, design, development, and launch — our studio handles the full pipeline.",
    primaryLabel: "Start a Game Project",
    primaryLink: "/contact",
  },
};

/* ─────────────────────── 5. AUGMENTED REALITY ─────────────────────── */
export const arData = {
  title: "Augmented Reality (AR)",
  breadcrumb: "Augmented Reality",
  heroImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1600&auto=format&fit=crop&q=80",

  intro: {
    subtitle: "Our Services",
    title: "Augmented Reality Solutions",
    description:
      "We help businesses harness the power of Augmented Reality to create unforgettable customer experiences, streamline training, and revolutionise product visualisation.",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Augmented Reality",
  },

  sections: [
    {
      tag: "AR Commerce",
      title: "AR-Powered Product Visualisation",
      description:
        "Allow customers to visualise products in their real-world environment before purchasing — reducing returns and increasing buyer confidence significantly.",
      features: ["WebAR (no app required)", "3D model integration", "E-commerce platform plugins"],
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=80",
      imageAlt: "AR product visualisation",
    },
    {
      tag: "AR Training",
      title: "AR Training & Simulation",
      description:
        "Replace expensive physical training with interactive AR simulations that improve knowledge retention and reduce risk in industries like healthcare, manufacturing, and logistics.",
      features: ["Step-by-step guided procedures", "Performance analytics", "Multi-device support"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop&q=80",
      imageAlt: "AR training",
    },
    {
      tag: "AR Marketing",
      title: "AR Marketing Campaigns",
      description:
        "Create viral, interactive marketing campaigns using AR filters, try-on experiences, and location-based activations that generate real buzz and engagement.",
      features: ["Instagram & Snapchat AR filters", "Location-based AR activations", "Campaign analytics dashboard"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
      imageAlt: "AR marketing",
    },
  ],

  cta: {
    heading: "Bring Your Brand Into the Real World",
    subtext: "Augmented Reality experiences that surprise, delight, and convert.",
    primaryLabel: "Explore AR Solutions",
    primaryLink: "/contact",
  },
};

/* ─────────────────────── 6. VIRTUAL REALITY ─────────────────────── */
export const vrData = {
  title: "Virtual Reality (VR)",
  breadcrumb: "Virtual Reality",
  heroImage: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1600&auto=format&fit=crop&q=80",

  intro: {
    subtitle: "Our Services",
    title: "Virtual Reality Development",
    description:
      "Step into the future with our immersive Virtual Reality solutions. We design and develop VR experiences for enterprise training, real estate, healthcare, and entertainment.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Virtual Reality",
  },

  sections: [
    {
      tag: "VR Training",
      title: "Enterprise VR Training",
      description:
        "Deliver safe, repeatable, and measurable training experiences in fully immersive virtual environments — reducing training costs while improving outcomes.",
      features: ["SCORM & LMS integration", "Branching scenario narratives", "Performance data & certifications"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop&q=80",
      imageAlt: "VR training",
    },
    {
      tag: "Virtual Tours",
      title: "Real Estate & Virtual Tours",
      description:
        "Let buyers explore properties, hotels, or venues from anywhere in the world. Our interactive 3D virtual tours increase engagement and accelerate decisions.",
      features: ["360° photogrammetry capture", "Interactive hotspots & info panels", "Embedded in web & mobile"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Virtual tours",
    },
  ],

  cta: {
    heading: "Ready to Explore Virtual Reality?",
    subtext: "Build immersive VR worlds that train, sell, and inspire.",
    primaryLabel: "Discuss Your VR Project",
    primaryLink: "/contact",
  },
};

/* ─────────────────────── 7. AI-POWERED SOLUTIONS ─────────────────────── */
export const aiData = {
  title: "AI-Powered Solutions",
  breadcrumb: "AI Solutions",
  heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=80",

  intro: {
    subtitle: "Our Services",
    title: "AI-Powered Solutions",
    description:
      "Unlock the full potential of Artificial Intelligence for your business. We build custom AI models, intelligent automation systems, and data-driven products that create competitive advantage.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    imageAlt: "AI solutions",
  },

  sections: [
    {
      tag: "Machine Learning",
      title: "Custom ML Models",
      description:
        "From predictive analytics to recommendation engines, our data scientists design and deploy machine learning models that solve real business problems at scale.",
      features: ["Supervised & unsupervised learning", "Model training, tuning & deployment", "MLOps & continuous monitoring"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Machine learning",
    },
    {
      tag: "NLP & Chatbots",
      title: "NLP & Conversational AI",
      description:
        "Build intelligent chatbots, virtual assistants, and document processing pipelines that understand, respond, and learn from natural language interactions.",
      features: ["LLM fine-tuning (GPT, Llama)", "RAG pipelines for enterprise knowledge", "Multi-channel deployment"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80",
      imageAlt: "NLP chatbots",
    },
    {
      tag: "Computer Vision",
      title: "Computer Vision",
      description:
        "Automate visual inspection, object detection, facial recognition, and document OCR with our battle-tested computer vision solutions built for production.",
      features: ["Object & defect detection", "Face recognition & liveness detection", "Document extraction & OCR pipelines"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Computer vision",
    },
  ],

  cta: {
    heading: "Ready to Build an Intelligent Product?",
    subtext: "Let AI do the heavy lifting. We design, train, and deploy custom AI systems tailored to your business.",
    primaryLabel: "Explore AI Services",
    primaryLink: "/contact",
  },
};

/* ─────────────────────── 8. BLOCKCHAIN ─────────────────────── */
export const blockchainData = {
  title: "Blockchain Technology",
  breadcrumb: "Blockchain",
  heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&auto=format&fit=crop&q=80",

  intro: {
    subtitle: "Our Services",
    title: "Blockchain Development",
    description:
      "We build decentralised, transparent, and secure blockchain solutions — from smart contracts to full DeFi platforms — that modernise trust in digital transactions.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Blockchain",
  },

  sections: [
    {
      tag: "Smart Contracts",
      title: "Smart Contract Development",
      description:
        "Automate business logic with audited, gas-optimised smart contracts on Ethereum, Solana, BNB Chain, and other leading networks.",
      features: ["Solidity & Rust development", "Security audits & formal verification", "Multi-chain deployment"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Smart contracts",
    },
    {
      tag: "DeFi & NFTs",
      title: "DeFi & NFT Platforms",
      description:
        "Launch DEXes, lending protocols, staking platforms, and NFT marketplaces with battle-tested smart contract architecture and intuitive frontends.",
      features: ["Liquidity pools & yield farming", "NFT minting & marketplace", "Tokenomics design & launch"],
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&auto=format&fit=crop&q=80",
      imageAlt: "DeFi NFT platforms",
    },
    {
      tag: "Enterprise Blockchain",
      title: "Enterprise Blockchain Solutions",
      description:
        "Deploy private or consortium blockchain networks for supply chain transparency, digital identity, and cross-organisation data sharing using Hyperledger and similar frameworks.",
      features: ["Hyperledger Fabric & Besu", "Supply chain traceability", "Digital identity & credential management"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Enterprise blockchain",
    },
  ],

  cta: {
    heading: "Build on the Blockchain",
    subtext: "From concept to mainnet — we architect decentralised solutions that scale.",
    primaryLabel: "Start a Blockchain Project",
    primaryLink: "/contact",
  },
};

/* ─────────────────────── 9. UI/UX DESIGN ─────────────────────── */
export const uiuxData = {
  title: "UI/UX Design",
  breadcrumb: "UI/UX",
  heroImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1600&auto=format&fit=crop&q=80",

  intro: {
    subtitle: "Our Services",
    title: "UI/UX Design",
    description:
      "We craft interfaces that users love and businesses convert on. Our design process is research-driven, user-centric, and deeply collaborative from discovery to handoff.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&auto=format&fit=crop&q=80",
    imageAlt: "UI/UX design",
  },

  sections: [
    {
      tag: "Research",
      title: "User Research & Strategy",
      description:
        "We start with deep user research, persona development, and journey mapping to ensure every design decision is grounded in real user needs and business goals.",
      features: ["User interviews & usability testing", "Persona & journey mapping", "Competitive analysis"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
      imageAlt: "User research",
    },
    {
      tag: "Design",
      title: "Wireframing & Prototyping",
      description:
        "From low-fidelity wireframes to polished interactive prototypes, we rapidly iterate to validate ideas before a single line of code is written — saving time and budget.",
      features: ["Lo-fi to hi-fi wireframes", "Interactive Figma prototypes", "Design system creation"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Wireframing prototyping",
    },
    {
      tag: "Delivery",
      title: "Developer Handoff & Design Systems",
      description:
        "We deliver pixel-perfect design specs, component libraries, and design tokens that make developer handoff seamless and ensure consistency at scale.",
      features: ["Figma component libraries", "Design tokens & theming", "Responsive & accessible specs"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Design handoff",
    },
  ],

  cta: {
    heading: "Design That Converts",
    subtext: "Beautiful, intuitive interfaces built to delight users and drive business results.",
    primaryLabel: "Start a Design Project",
    primaryLink: "/contact",
  },
};

/* ─── master map (slug → data) ─────────────────────────────────────── */
export const servicesMap = {
  "mobile-app": mobileAppData,
  "web-app": webAppData,
  "digital-marketing": digitalMarketingData,
  "game-development": gameDevelopmentData,
  "augmented-reality": arData,
  "virtual-reality": vrData,
  "ai-solutions": aiData,
  blockchain: blockchainData,
  "ui-ux": uiuxData,
};