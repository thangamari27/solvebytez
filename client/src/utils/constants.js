
export const NAV_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },

  {
    id: "services",
    label: "Services",
    href: "#",
    submenu: [
      { name: "Mobile Application", href: "/services/mobile-app" },
      { name: "Web Application", href: "/services/web-app" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Game Development", href: "/services/game-development" }, 
      { name: "Augmented Reality (AR)", href: "/services/augmented-reality" }, 
      { name: "Virtual Reality (VR)", href: "/services/virtual-reality" }, 
      { name: "Blockchain Technology", href: "/services/blockchain" },
      { name: "AI-Powered Solutions", href: "/services/ai-solutions" },
      { name: "UI/UX", href: "/services/ui-ux" },
    ],
  },

  { id: "portfolio", label: "Portfolio", href: "/portfolio" }
];

// Page Links for Footer
export const PAGE_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "portfolio", label: "Portfolio", href: "/portfolio" },
  { id: "contact", label: "Contact", href: "/contact" },
];

// Service Links for Footer
export const SERVICE_LINKS = [
  { id: "mobile", label: "Mobile Application", href: "/services/mobile-app" },
  { id: "web", label: "Web Application", href: "/services/web-app" },
  { id: "marketing", label: "Digital Marketing", href: "/services/digital-marketing" },
  { id: "game", label: "Game Development", href: "/services/game-development" },
  { id: "ar", label: "Augmented Reality (AR)", href: "/services/augmented-reality" },
  { id: "vr", label: "Virtual Reality (VR)", href: "/services/virtual-reality" },
  { id: "blockchain", label: "Blockchain Technology", href: "/services/blockchain" },
  { id: "ai", label: "AI-Powered Solutions", href: "/services/ai-solutions" },
  { id: "uiux", label: "UI/UX Design", href: "/services/ui-ux" },
];

export const SOCIAL_LINKS = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61566450177071", icon: "Facebook", iconSrc: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/solve-bytez-57741632b/", icon: "Linkedin", iconSrc: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@SolveBytez", icon: "Youtube", iconSrc: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/solve_bytez_/", icon: "Instagram", iconSrc: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" },
];

export const CONTACT_INFO = {
  phone: "+91-9599179795",
  email: "info@solvebytez.com",
  address: "SaaS District, Digital Hub, IN 110001",
};

export const WORKING_HOURS = [
  { days: "Monday – Saturday", hours: "9:00 AM – 6:00 PM", closed: false },
  { days: "Sunday", hours: "Closed", closed: true },
];


export const STATS = [
  { id: 1, value: 120, suffix: "+", label: "Projects Delivered", icon: "CheckCircle" },
  { id: 2, value: 80, suffix: "+", label: "Clients Served", icon: "Users" },
  { id: 3, value: 95, suffix: "%", label: "Client Satisfaction", icon: "Smile" },
  { id: 4, value: 24, suffix: "/7", label: "Technical Support", icon: "LifeBuoy" },
];

export const FLOATING_ICONS = [
  { id: 1, src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", bg: "bg-pink-50", top: "top-20", left: "left-10", delay: 0.3, duration: 4 },
  { id: 2, src: "https://cdn-icons-png.flaticon.com/512/733/733579.png", bg: "bg-blue-50", top: "top-40", right: "right-16", delay: 0.6, duration: 5 },
  { id: 3, src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", bg: "bg-red-50", bottom: "bottom-32", left: "left-20", delay: 1, duration: 4.5 },
  { id: 4, src: "https://cdn-icons-png.flaticon.com/512/145/145808.png", bg: "bg-purple-50", bottom: "bottom-20", right: "right-10", delay: 1.2, duration: 5 },
];
