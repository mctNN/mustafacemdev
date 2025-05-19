"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Stark Bilişim Website",
      description: "Şirket web sitesi tasarımı ve geliştirmesi",
      image: "/project1-placeholder.jpg",
      category: ["web", "design"],
      technologies: ["React", "Next.js", "TailwindCSS"],
      demoLink: "https://starkbilisim.com",
      githubLink: "https://github.com/Stark-Bilisim/starksite",
      featured: true,
    },
    {
      id: 2,
      title: "MERN Notepad",
      description: "MongoDB, Express, React ve Node.js ile yapılmış not uygulaması",
      image: "/project2-placeholder.jpg",
      category: ["web", "fullstack"],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://mern-notepad.example.com",
      githubLink: "https://github.com/mctNN/mern-notepad",
      featured: true,
    },
    {
      id: 3,
      title: "QR Kod Oluşturucu",
      description: "Hızlı QR kod oluşturma web uygulaması",
      image: "/project3-placeholder.jpg",
      category: ["web", "tool"],
      technologies: ["HTML", "CSS", "JavaScript"],
      demoLink: "https://mctnnqr.example.com",
      githubLink: "https://github.com/mctNN/mctnnqr",
      featured: false,
    },
    {
      id: 4,
      title: "Kişisel Blog",
      description: "Kişisel yazılarımı paylaştığım blog platformu",
      image: "/project4-placeholder.jpg",
      category: ["web", "blog"],
      technologies: ["Next.js", "TailwindCSS", "MDX"],
      demoLink: "https://mustafacem.dev",
      githubLink: "https://github.com/mctNN/mctdev",
      featured: true,
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((project) => project.category.includes(activeFilter));

  const categories = [
    { id: "all", name: "Tümü" },
    { id: "web", name: "Web" },
    { id: "fullstack", name: "Fullstack" },
    { id: "design", name: "Tasarım" },
    { id: "tool", name: "Araç" },
    { id: "blog", name: "Blog" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Projelerim
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Geliştirdiğim projelerden bazıları. Her biri farklı teknolojiler ve çözümleri içeriyor.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Öne Çıkan
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Canlı Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Kaynak Kod</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400">
              Bu kategoride henüz proje eklenmemiş.
            </p>
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="https://github.com/mctNN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
          >
            <FaGithub className="text-xl" />
            <span>GitHub Profilimi Ziyaret Et</span>
          </a>
        </div>
      </div>
    </section>
  );
} 