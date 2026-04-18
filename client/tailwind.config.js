import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ["Plus Jakarta Sans", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#1164E8",       // The solid medium blue from the logo
        "brand-cyan": "#29CCFF",  // The bright cyan tip
        "brand-dark": "#0D1B3E",  // The deep navy in the logo shadows

        dark: "#0a0a0a",
        light: "#f8fafc",
        
        accent: {
          blue: "#29CCFF",        // Updated to match logo cyan
          green: "#10B981",
        },

        surface: "#ffffff",
        "surface-muted": "#f1f5f9",
        "surface-border": "#e5e7eb",
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        blob: "blob 8s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        "spin-slow": "spin 6s linear infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },

        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70%" },
          "50%": { borderRadius: "30% 60% 70% 40%" },
        },

        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #29CCFF 0%, #1164E8 100%)",
      },
    },
  },
  plugins: [],
};  