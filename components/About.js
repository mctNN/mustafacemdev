"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  const stats = [
    { label: "Yıllık Deneyim", value: "5+" },
    { label: "Tamamlanan Proje", value: "30+" },
    { label: "Müşteri Memnuniyeti", value: "100%" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Hakkımda
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/about-placeholder.jpg"
                alt="Mustafa Cem"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold">Mustafa Cem</h3>
                <p className="text-gray-200">Fullstack Yazılım Geliştirici</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-3/5"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Merhaba! Ben Mustafa Cem, İstanbul'da yaşayan bir Fullstack Geliştirici.
            </h3>
            
            <div className="text-gray-600 dark:text-gray-300 space-y-4 mb-8">
              <p>
                Yazılım geliştirme dünyasında 5+ yıllık deneyimimle, modern ve kullanıcı dostu web uygulamaları oluşturmaya odaklanıyorum. JavaScript ekosisteminde uzmanlaşmış olup, React, Next.js, Node.js ve diğer modern teknolojilerle çalışmaktayım.
              </p>
              <p>
                Stark Bilişim'de yazılım geliştirici olarak kariyerime devam ederken, teknik becerilerimi sürekli geliştirmeye ve sektördeki en son trendleri takip etmeye özen gösteriyorum.
              </p>
              <p>
                Kullanıcı deneyimi, performans ve kod kalitesine büyük önem veriyorum. Her projede, güzel görünen ve aynı zamanda kusursuz çalışan çözümler sunmayı hedefliyorum.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
                  <h4 className="text-3xl font-bold text-blue-600">{stat.value}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a 
                href="/cv.pdf" 
                target="_blank"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                CV'mi İndir
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
              >
                Benimle İletişime Geç
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 