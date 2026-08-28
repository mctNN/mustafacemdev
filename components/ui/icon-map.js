import {
  FaGithub, FaLinkedin, FaTwitter, FaInstagram,
  FaReact, FaNodeJs, FaDatabase, FaCode, FaServer,
  FaMobileAlt, FaLaptopCode, FaBrain,
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiExpress,
  SiMongodb, SiPostgresql, SiTailwindcss, SiGit, SiDocker, SiAmazon,
} from "react-icons/si";

// data.js içindeki string anahtarları gerçek react-icons bileşenlerine bağlar.
// Veri katmanı (lib/data.js) bu sayede JSX/React'tan bağımsız kalır.
export const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: FaReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  responsive: FaMobileAlt,
  nodejs: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  server: FaServer,
  git: SiGit,
  docker: SiDocker,
  aws: SiAmazon,
  code: FaCode,
  database: FaDatabase,
  laptop: FaLaptopCode,
  brain: FaBrain,
  mobile: FaMobileAlt,
};

export function Icon({ name, className }) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}
