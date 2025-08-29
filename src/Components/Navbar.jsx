import { useEffect, useState, useRef } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../assets/Logo.png";

const menuItems = [
  {
    name: 'Products',
    link: "/#",
    subMenu: [{ name: "Drop1", link: "/#" }]
  },
  {
    name: 'Benefits',
    link: "/#",
    subMenu: null
  },
  {
    name: 'How It Works',
    link: "/#",
    subMenu: null
  },
  {
    name: 'Pricing',
    link: "/#",
    subMenu: null
  },
  {
    name: 'Company',
    link: "/#",
    subMenu: [{ name: "Drop1", link: "/#" }]
  }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Calculer la progression du défilement
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const progress = (window.scrollY / docHeight) * 100;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && mobileOpen) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  }

  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      {/* Navbar */}
      <nav className={`sticky top-0 z-30 w-full flex items-center px-6 py-4 justify-between backdrop-blur-sm transition-all duration-300 ease-in-out ${scrolled ? "bg-secondary700" : ""}`}>
        {/* Logo */}
        <div className="text-xl font-bold flex items-center gap-2">
          <img src={Logo} alt="Logo" className="" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-light">
          {menuItems.map((item, key) => (
            <li
              key={key}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredItem(key)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="flex items-center gap-1 hover:text-primary transition">
                {item.name}
                {item.subMenu && <FaChevronDown className="text-xs" />}
              </span>

              {/* Dropdown */}
              <AnimatePresence>
                {hoveredItem === key && item.subMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg p-4 rounded w-40 z-40"
                  >
                    {item.subMenu.map((sub, i) => (
                      <a key={i} href={sub.link} className="block text-sm hover:text-purple-600 transition">
                        {sub.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Buttons */}

        <div className="hidden md:flex  gap-4 items-center">
          <button className="text-white px-4 py-2 rounded-full hover:bg-white hover:text-secondary500 transition">
            Login
          </button>
          <button className="bg-primary text-white hover:bg-secondary500 hover:text-primary px-4 py-2 rounded-full transition">
            Get Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-xl z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Barre de progression */}
        <div className="fixed bottom-0 left-0 w-full h-1 z-40 ">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </nav>

      {/* Offcanvas Menu (Left side) */}
      <div className={`z-50 fixed top-0 left-0 h-full w-full bg-secondary700 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-lg font-bold">
            <img src={Logo} alt="Vaultflow Logo" />
          </div>
          <button onClick={toggleMenu} className="bg-[#20035E] text-light p-1 items-center justify-center rounded-md">
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col justify-between h-[calc(100%-64px)] px-6 py-6">
          {/* Menu Items */}
          <ul className="flex flex-col gap-4 text-xl items-start text-left">
            {menuItems.map((item, key) => (
              <li key={key}>
                <button
                  onClick={() => setActiveItem(activeItem === key ? null : key)}
                  className="flex items-center gap-2 justify-between w-full text-left hover:text-primary transition"
                >
                  {item.name}
                  {item.subMenu && <FaChevronDown className="text-xs" />}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeItem === key && item.subMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="ml-4 mt-2 flex flex-col gap-1 text-gray-300"
                    >
                      {item.subMenu.map((sub, i) => (
                        <a key={i} href={sub.link} className="block text-md hover:text-purple-600 transition">
                          {sub.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>


          {/* Bottom Button */}
          <div className="w-full flex pt-6">
            <button
              onClick={() => {
                toggleMenu();
              }}
              className="w-full text-center px-4 md:px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-primary hover:shadow-primary/50 hover:shadow-2xl focus:outline-none duration-300"
            >
              Get Demo
            </button>
          </div>
        </div>
      </div>

    </>
  );
}