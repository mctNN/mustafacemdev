"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              MustafaCem<span className="text-blue-600">.dev</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Fullstack Yazılım Geliştirici
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              {[
                { href: "https://github.com/mctNN", icon: <FaGithub />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/mustafacemm/", icon: <FaLinkedin />, label: "LinkedIn" },
                { href: "https://x.com/mct_NN", icon: <FaTwitter />, label: "Twitter" },
                { href: "https://www.instagram.com/mustafacemtaskinn/", icon: <FaInstagram />, label: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-lg transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Mustafa Cem Taşkın. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 