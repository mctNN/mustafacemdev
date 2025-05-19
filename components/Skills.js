"use client";

import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, 
  FaGitAlt, FaDocker, FaFigma 
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, 
  SiExpress, SiMongodb, SiPostgresql, SiAmazon 
} from "react-icons/si";

export function Skills() {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 90 },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
    { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 90 },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 85 },
    { name: "Express", icon: <SiExpress />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 80 },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, level: 75 },
    { name: "REST API", icon: <FaDatabase />, level: 85 },
    { name: "GraphQL", icon: <FaDatabase className="text-[#E535AB]" />, level: 70 },
  ];

  const otherSkills = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: 85 },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, level: 70 },
    { name: "AWS", icon: <SiAmazon className="text-[#FF9900]" />, level: 65 },
    { name: "UI/UX", icon: <FaFigma className="text-[#F24E1E]" />, level: 75 },
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

  const SkillCard = ({ skill }) => (
    <motion.div
      variants={item}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl">{skill.icon}</div>
        <h3 className="font-medium">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <div className="mt-1 text-right text-sm text-gray-500 dark:text-gray-400">
        {skill.level}%
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Yeteneklerim
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Yazılım dünyasında kendimi sürekli geliştirerek edindiğim beceriler ve teknolojiler.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="flex-1">Frontend Teknolojileri</span>
              <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-4"></div>
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {frontendSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="flex-1">Backend Teknolojileri</span>
              <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-4"></div>
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {backendSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <span className="flex-1">Diğer Beceriler</span>
              <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-4"></div>
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {otherSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 