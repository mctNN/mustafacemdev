"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaMobileAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiGit, SiDocker, SiAmazon } from "react-icons/si";

export default function Skills() {
  // Frontend yetenekleri
  const frontendSkills = [
    { name: "JavaScript", icon: <SiJavascript />, level: 90, color: "text-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "text-blue-500" },
    { name: "React", icon: <FaReact />, level: 90, color: "text-blue-400" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "text-gray-700 dark:text-gray-300" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, level: 90, color: "text-cyan-500" },
    { name: "Responsive Design", icon: <FaMobileAlt />, level: 85, color: "text-green-500" },
  ];

  // Backend yetenekleri
  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, level: 85, color: "text-green-600" },
    { name: "Express", icon: <SiExpress />, level: 80, color: "text-gray-600 dark:text-gray-400" },
    { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "text-green-500" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 75, color: "text-blue-600" },
    { name: "RESTful API", icon: <FaServer />, level: 85, color: "text-red-500" },
    { name: "Git/GitHub", icon: <SiGit />, level: 85, color: "text-orange-600" },
  ];

  // Genel yetenekler ve araçlar
  const otherSkills = [
    { name: "Docker", icon: <SiDocker />, level: 70, color: "text-blue-500" },
    { name: "AWS", icon: <SiAmazon />, level: 65, color: "text-orange-500" },
    { name: "Clean Code", icon: <FaCode />, level: 85, color: "text-indigo-500" },
    { name: "Database Design", icon: <FaDatabase />, level: 80, color: "text-purple-500" },
  ];

  // Yetenek kartını oluşturan yardımcı bileşen
  const SkillCard = ({ skill }) => (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className={`text-2xl ${skill.color}`}>{skill.icon}</div>
      <div className="flex-grow">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full" 
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    </div>
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
              Yeteneklerim
            </span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            5+ yıllık deneyimim süresince farklı teknolojiler ve araçlarla çalıştım.
            Sürekli kendimi geliştirmeye ve yeni teknolojiler öğrenmeye devam ediyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend Yetenekler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-5">
              <h2 className="text-xl font-semibold mb-5 text-gray-900 dark:text-white flex items-center gap-2">
                <FaReact className="text-blue-500" />
                Frontend
              </h2>
              <div className="space-y-4">
                {frontendSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Backend Yetenekler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-5">
              <h2 className="text-xl font-semibold mb-5 text-gray-900 dark:text-white flex items-center gap-2">
                <FaNodeJs className="text-green-600" />
                Backend
              </h2>
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Diğer Yetenekler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-5">
              <h2 className="text-xl font-semibold mb-5 text-gray-900 dark:text-white flex items-center gap-2">
                <FaCode className="text-indigo-500" />
                Diğer
              </h2>
              <div className="space-y-4">
                {otherSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>

            {/* Öğrenme Süreci */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Öğrenim Sürecim
                </h2>
                <div className="relative pl-8 pb-4">
                  <div className="absolute top-0 bottom-0 left-3 w-1 bg-blue-500"></div>
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm">
                    <FaCode />
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Sürekli Öğrenme
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Teknoloji dünyasında güncel kalmak için düzenli olarak yeni araçlar ve kütüphaneler öğrenmeye devam ediyorum.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 