import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/utils/constants";
import TopBar from "./TopBar";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle hover to open/close dropdown
  const handleMouseEnter = (linkId) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(linkId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleDropdownToggle = (linkId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === linkId ? null : linkId));
  };

  const handleMobileDropdownToggle = (linkId, e) => {
    e.preventDefault();
    setMobileDropdownOpen((prev) => (prev === linkId ? null : linkId));
  };

  return (
    <>
      <TopBar visible={showTopBar} />

      <motion.nav
        initial={false}
        animate={{ top: showTopBar ? 40 : 0 }}
        transition={{ duration: 0.35 }}
        className="fixed left-0 right-0 z-40 bg-white border-b border-gray-200"
      >
        <div className=" mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <img src="/FinalLogo.png" className="h-20" alt="SolveBytez Logo" />
            </a>

            {/* Desktop Nav */}
            <ul className="flex-1 justify-end hidden lg:flex items-center gap-2 relative">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => link.submenu && handleMouseEnter(link.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.submenu) {
                        e.preventDefault();
                        handleDropdownToggle(link.id, e);
                      } else {
                        setActiveLink(link.id);
                      }
                    }}
                    className={`group px-4 py-2 text-sm font-semibold inline-flex items-center gap-1 ${activeLink === link.id
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                      }`}
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.id ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </a>

                  {/* DESKTOP DROPDOWN - Slide from top to bottom animation */}
                  <AnimatePresence>
                    {link.submenu && openDropdown === link.id && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: -20, scaleY: 0 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -20, scaleY: 0 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                          scaleY: { duration: 0.2 }
                        }}
                        style={{ transformOrigin: "top" }}
                        className="absolute -right-40 -translate-x-1/2 top-full mt-2 w-[90vw] max-w-3xl bg-white shadow-xl rounded-xl border border-gray-100 p-6 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {link.submenu.map((item, i) => (
                            <motion.a
                              key={i}
                              href={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.03 }}
                              className="text-gray-700 font-medium hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.name}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="btn-primary hidden sm:flex items-center text-sm"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Meet With Us
              </motion.a>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2"
                aria-label="Open menu"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU - With scroll for overflow */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 z-50"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-80 h-full bg-white z-50 overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-white z-10 px-5 pt-4 border-b border-gray-100 flex justify-between items-center">
                <img src="/FinalLogo.png" className="h-20" alt="SolveBytez Logo" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>

              <div className="px-5 pb-8">
                {NAV_LINKS.map((link) => (
                  <div key={link.id} className="mb-2">
                    {/* Mobile navigation item */}
                    <div className="flex items-center justify-between">
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.submenu) {
                            e.preventDefault();
                            handleMobileDropdownToggle(link.id, e);
                          } else {
                            setMobileOpen(false);
                            setActiveLink(link.id);
                          }
                        }}
                        className={`flex-1 py-3 text-base font-semibold ${activeLink === link.id
                          ? "text-primary"
                          : "text-gray-700"
                          }`}
                      >
                        {link.label}
                      </a>
                      {link.submenu && (
                        <button
                          onClick={(e) => handleMobileDropdownToggle(link.id, e)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${mobileDropdownOpen === link.id ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile submenu - Toggle open/close */}
                    <AnimatePresence>
                      {link.submenu && mobileDropdownOpen === link.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden pl-4 border-l-2 border-primary/20 ml-2"
                        >
                          {link.submenu.map((item, i) => (
                            <motion.a
                              key={i}
                              href={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.03 }}
                              className="block py-2.5 text-sm text-gray-600 hover:text-primary transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile CTA Button */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="/contact"
                    className="btn-primary w-full flex items-center justify-center text-sm py-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    <PhoneCall className="w-5 h-5 mr-2" />
                    Meet With Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}