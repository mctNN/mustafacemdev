"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiRedux, SiTailwindcss, SiFirebase } from "react-icons/si";

export default function Projects() {
  // Proje listesi
  const projects = [
    {
      id: 1,
      title: "E-Ticaret Platformu",
      description: "Modern bir e-ticaret platformu. Kullanıcı dostu arayüz, ödeme entegrasyonu ve yönetim paneli içerir.",
      image: "/projects/ecommerce-project.jpg",  // Bu dosyayı public/projects/ içine eklemeniz gerekecek
      tags: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      icons: [<FaReact key="react" className="text-blue-400" />, <SiRedux key="redux" className="text-purple-500" />, <FaNodeJs key="node" className="text-green-600" />, <SiExpress key="express" className="text-gray-700 dark:text-gray-300" />, <SiMongodb key="mongodb" className="text-green-500" />],
      demo: "https://ecommerce-demo.mustafacem.dev",
      github: "https://github.com/mctNN/ecommerce-platform"
    },
    {
      id: 2,
      title: "Blog & CMS",
      description: "Markdown destekli, SEO dostu modern bir blog ve içerik yönetim sistemi.",
      image: "/projects/blog-project.jpg",  // Bu dosyayı public/projects/ içine eklemeniz gerekecek
      tags: ["Next.js", "TailwindCSS", "Firebase"],
      icons: [<SiNextdotjs key="nextjs" className="text-black dark:text-white" />, <SiTailwindcss key="tailwind" className="text-cyan-500" />, <SiFirebase key="firebase" className="text-yellow-500" />],
      demo: "https://blog-demo.mustafacem.dev",
      github: "https://github.com/mctNN/blog-cms"
    },
    {
      id: 3,
      title: "Task Yönetim Uygulaması",
      description: "Sürükle-bırak özellikli, gerçek zamanlı işbirliği sağlayan proje ve görev yönetim uygulaması.",
      image: "/projects/task-project.jpg",  // Bu dosyayı public/projects/ içine eklemeniz gerekecek
      tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
      icons: [<FaVuejs key="vue" className="text-green-500" />, <FaNodeJs key="node" className="text-green-600" />, <SiExpress key="express" className="text-gray-700 dark:text-gray-300" />, <SiMongodb key="mongodb" className="text-green-500" />],
      demo: "https://task-demo.mustafacem.dev",
      github: "https://github.com/mctNN/task-manager"
    },
    {
      id: 4,
      title: "Kişisel Portföy Sitesi",
      description: "Next.js ve Tailwind CSS ile geliştirilmiş, modern ve duyarlı kişisel portföy web sitesi.",
      image: "/projects/portfolio-project.jpg",  // Bu dosyayı public/projects/ içine eklemeniz gerekecek
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      icons: [<SiNextdotjs key="nextjs" className="text-black dark:text-white" />, <SiTailwindcss key="tailwind" className="text-cyan-500" />],
      demo: "https://mustafacem.dev",
      github: "https://github.com/mctNN/portfolio"
    }
  ];

  // Proje kartı bileşeni
  const ProjectCard = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full">
        <div className="absolute inset-0 bg-blue-900/30 dark:bg-black/50 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h3 className="text-xl font-bold text-white text-center px-4">{project.title}</h3>
        </div>
        <div className="relative h-full w-full">
          {/* Normalde Image componenti kullanırdık ama resim dosyalarınız olmadığı için background-color kullanıyoruz */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3 mb-5">
          {project.icons}
        </div>
        
        <div className="flex justify-between mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg flex items-center gap-1 bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <FaGithub /> Kod
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );

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
              Projelerim
            </span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Frontend ve backend teknolojileriyle geliştirdiğim bazı projeler.
            Daha fazla proje için GitHub profilimi ziyaret edebilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
            Daha Fazla Proje
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Tüm projelerimi GitHub üzerinden inceleyebilirsiniz. 
            Her zaman yeni projeler üzerinde çalışıyorum.
          </p>
          <a
            href="https://github.com/mctNN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white transition-colors"
          >
            <FaGithub />
            GitHub Profilim
          </a>
        </motion.div>
      </div>
    </div>
  );
} 