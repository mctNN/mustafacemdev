"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımda", href: "/about" },
    { name: "Yetenekler", href: "/skills" },
    { name: "Projeler", href: "/projects" },
    { name: "İletişim", href: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/mctNN" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/mustafacemm/" },
    { name: "Twitter", icon: <FaTwitter />, href: "https://x.com/mct_NN" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/mustafacemtaskinn/" },
  ];

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            MustafaCem<span className="text-blue-600">.dev</span>
          </Link>

          {/* Mobil menü butonu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleMenu} 
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop menü */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-3 ml-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <ThemeToggle />
          </nav>
        </div>

        {/* Mobil menü */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <nav className="flex flex-col gap-4 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center gap-5 pt-4 border-t border-gray-200 dark:border-gray-800">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-xl"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 