"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCode, FaLaptopCode, FaBrain, FaMobile } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-900 dark:text-white">Merhaba, ben </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Mustafa Cem
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 my-6 h-10">
              <TypeAnimation
                sequence={[
                  "Fullstack Yazılım Geliştirici",
                  1500,
                  "JavaScript Geliştiricisi",
                  1500,
                  "Web Geliştirici",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 text-base md:text-lg">
              Web uygulamaları geliştiren, kullanıcı deneyimine önem veren ve
              modern teknolojileri kullanan bir yazılım geliştiricisiyim.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link 
                href="/projects" 
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2"
              >
                Projelerimi Gör <FaArrowRight size={16} />
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-all inline-flex items-center gap-2"
              >
                İletişime Geç
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Ana görsel - Terminal Görünümü */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 shadow-lg opacity-80"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 dark:text-gray-500">
                  developer.js
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-8 pt-10">
                  <div className="space-y-4 text-left w-full font-mono">
                    <div className="text-gray-500 dark:text-gray-400 text-sm">// Mustafa Cem Taşkın</div>
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">const </span>
                      <span className="text-blue-600 dark:text-blue-400">developer</span>
                      <span className="text-gray-800 dark:text-gray-200"> = </span>
                      <span className="text-green-600 dark:text-green-400">{'{'}</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-pink-600 dark:text-pink-400">name</span>
                      <span className="text-gray-800 dark:text-gray-200">: </span>
                      <span className="text-amber-600 dark:text-amber-400">'Mustafa Cem'</span>
                      <span className="text-gray-800 dark:text-gray-200">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-pink-600 dark:text-pink-400">skills</span>
                      <span className="text-gray-800 dark:text-gray-200">: </span>
                      <span className="text-gray-800 dark:text-gray-200">[</span>
                      <span className="text-amber-600 dark:text-amber-400">'JavaScript'</span>
                      <span className="text-gray-800 dark:text-gray-200">, </span>
                      <span className="text-amber-600 dark:text-amber-400">'React'</span>
                      <span className="text-gray-800 dark:text-gray-200">, </span>
                      <span className="text-amber-600 dark:text-amber-400">'Node.js'</span>
                      <span className="text-gray-800 dark:text-gray-200">]</span>
                      <span className="text-gray-800 dark:text-gray-200">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-pink-600 dark:text-pink-400">interests</span>
                      <span className="text-gray-800 dark:text-gray-200">: </span>
                      <span className="text-gray-800 dark:text-gray-200">[</span>
                      <span className="text-amber-600 dark:text-amber-400">'Web Dev'</span>
                      <span className="text-gray-800 dark:text-gray-200">, </span>
                      <span className="text-amber-600 dark:text-amber-400">'UI/UX'</span>
                      <span className="text-gray-800 dark:text-gray-200">]</span>
                      <span className="text-gray-800 dark:text-gray-200">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-pink-600 dark:text-pink-400">location</span>
                      <span className="text-gray-800 dark:text-gray-200">: </span>
                      <span className="text-amber-600 dark:text-amber-400">'Türkiye'</span>
                    </div>
                    <div>
                      <span className="text-green-600 dark:text-green-400">{'}'}</span>
                      <span className="text-gray-800 dark:text-gray-200">;</span>
                    </div>
                    
                    {/* Terminal cursor animasyonu */}
                    <div className="flex items-center">
                      <span className="text-gray-600 dark:text-gray-400">{'>'}</span>
                      <span className="ml-2 h-4 w-2 bg-blue-500 dark:bg-blue-400 animate-pulse"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <FaCode className="text-blue-500 mb-3 text-3xl" />,
              title: "Modern Geliştirme",
              desc: "Güncel teknolojiler ve yaklaşımlarla yazılım geliştiriyorum"
            },
            {
              icon: <FaLaptopCode className="text-indigo-500 mb-3 text-3xl" />,
              title: "Responsive Tasarım",
              desc: "Tüm cihazlarda iyi çalışan arayüzler tasarlıyorum"
            },
            {
              icon: <FaBrain className="text-purple-500 mb-3 text-3xl" />,
              title: "Problem Çözme",
              desc: "Karmaşık sorunları adım adım çözüme kavuşturuyorum"
            },
            {
              icon: <FaMobile className="text-green-500 mb-3 text-3xl" />,
              title: "Kullanıcı Deneyimi",
              desc: "Kullanımı kolay ve sezgisel arayüzler oluşturuyorum"
            },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
