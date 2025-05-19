"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-20 lg:pt-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                Merhaba, ben{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Mustafa Cem
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              <TypeAnimation
                sequence={[
                  "Fullstack Yazılım Geliştirici",
                  1000,
                  "JavaScript Uzmanı",
                  1000,
                  "Web Geliştirici",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                İletişime Geç
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
              >
                Projelerimi Gör
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Profil resmi için yer tutucu - kendi fotoğrafınızı ekleyin */}
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-1.5">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/profile-placeholder.jpg"
                    alt="Mustafa Cem"
                    width={400}
                    height={400}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Dekoratif daire elementleri */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-70 dark:opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400 rounded-full opacity-70 dark:opacity-50 blur-xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Aşağı kaydırma işareti */}
        <div className="mt-16 hidden sm:flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <a href="#about" className="text-gray-400 dark:text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 