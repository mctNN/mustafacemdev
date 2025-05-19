"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaCode, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Hakkımda
            </span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 flex justify-center"
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              {/* Kod terminali görünümlü kart */}
              <div className="absolute inset-0 bg-gray-800 dark:bg-gray-900 rounded-xl overflow-hidden">
                <div className="h-6 bg-gray-700 flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400 ml-2">profile.js</div>
                </div>
                
                <div className="p-4 text-white">
                  <div className="text-green-500 mb-1">// Kişisel Bilgiler</div>
                  <div className="space-y-2 font-mono text-sm">
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">name</span> = <span className="text-amber-300">'Mustafa Cem Taşkın'</span>;
                    </div>
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">title</span> = <span className="text-amber-300">'Fullstack Yazılım Geliştirici'</span>;
                    </div>
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">location</span> = <span className="text-amber-300">'Kocaeli, Türkiye'</span>;
                    </div>
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-blue-400">email</span> = <span className="text-amber-300">'cemtaskin36@gmail.com'</span>;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md h-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Merhaba, Ben Mustafa Cem!
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  5+ yıllık yazılım geliştirme deneyimine sahip tutkulu bir Fullstack Geliştiriciyim. 
                  JavaScript ekosisteminde uzmanlaşmış olup, React, Next.js, Node.js ve modern web teknolojileriyle çalışıyorum.
                </p>
                <p>
                  Stark Bilişim şirketinde yazılım geliştirici olarak çalışıyorum ve sürekli olarak kendimi geliştirip 
                  yeni teknolojileri öğrenmeye odaklanıyorum.
                </p>
                <p>
                  Temiz kod, kullanıcı deneyimi ve performans konularında titizim. Her projede hem estetik hem de 
                  işlevsel çözümler sunmayı hedefliyorum.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {[
                  { key: "Deneyim", value: "5+ Yıl" },
                  { key: "Projeler", value: "30+" },
                  { key: "Diller", value: "JavaScript, TypeScript" },
                  { key: "Frontend", value: "React, Next.js" },
                  { key: "Backend", value: "Node.js, Express" },
                  { key: "Veritabanı", value: "MongoDB, PostgreSQL" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.key}</div>
                    <div className="font-medium text-gray-900 dark:text-white">{item.value}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link 
                  href="/contact" 
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors inline-flex items-center gap-2"
                >
                  İletişime Geç
                </Link>
                <Link 
                  href="/cv.pdf" 
                  className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition-colors inline-flex items-center gap-2"
                  target="_blank"
                >
                  <FaDownload size={14} />
                  CV İndir
                </Link>
                <div className="flex items-center gap-3 ml-auto">
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
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaCode className="text-blue-600" />
              <span>Teknik Yetenekler</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", 
                "Node.js", "Express", "MongoDB", "PostgreSQL",
                "RESTful API", "GraphQL", "TailwindCSS", "Git/GitHub"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaCode className="text-blue-600" />
              <span>Eğitim & Deneyim</span>
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">2021 - Günümüz</div>
                <div className="font-semibold">Stark Bilişim</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Fullstack Yazılım Geliştirici</div>
              </div>
              <div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">2019 - 2021</div>
                <div className="font-semibold">Freelance Geliştirici</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Web ve Mobil Uygulama Geliştirme</div>
              </div>
              <div>
                <div className="text-blue-600 dark:text-blue-400 font-medium">2015 - 2019</div>
                <div className="font-semibold">Bilgisayar Mühendisliği</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lisans Derecesi - XYZ Üniversitesi</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 