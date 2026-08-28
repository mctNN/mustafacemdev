// Sitedeki tüm statik içerik tek noktadan buradan besleniyor.
// İçerik güncellemesi (proje ekleme, CV bağlama, deneyim güncelleme vb.)
// component dosyalarına dokunmadan sadece bu dosyadan yapılabilir.

// Kaynak: LinkedIn profili (linkedin.com/in/mustafacemm) — kullanıcının kendi isteğiyle içe aktarıldı.
export const personalInfo = {
  fullName: "Mustafa Cem Taşkın",
  displayName: "Mustafa Cem",
  title: "Kurucu & Yazılım Geliştirici",
  email: "cemtaskin36@gmail.com",
  location: "Kocaeli, Türkiye",
  // Gerçek bir CV dosyası public/cv.pdf içine eklenip buraya "/cv.pdf" yazılınca
  // ilgili buton otomatik olarak indirme linkine dönüşür. Boşken mailto'ya düşer.
  cvUrl: null,
  roles: [
    "Kurucu, Stark Bilişim",
    "CTO, Levirise",
    "Full Stack Geliştirici",
  ],
  bio: [
    "2002 Kocaeli doğumluyum. Lise eğitimimi Sabancı Mesleki ve Teknik Anadolu Lisesi'nde, ön lisansımı Sakarya Uygulamalı Bilimler Üniversitesi'ne bağlı Karasu Meslek Yüksekokulu Bilgisayar Programcılığı bölümünde tamamladım.",
    "2020'den beri kurucusu olduğum Stark Bilişim'de yazılım geliştiriyor, aynı zamanda Levirise'de CTO olarak teknik süreçleri yönetiyorum. React, Next.js ve Node.js ekseninde modern web teknolojileriyle çalışıyorum.",
    "Temiz kod, kullanıcı deneyimi ve performans konularında titizim. Her projede hem estetik hem de işlevsel çözümler sunmayı hedefliyorum.",
  ],
};

export const socialLinks = [
  { name: "GitHub", icon: "github", href: "https://github.com/mctNN" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/mustafacemm/" },
  { name: "Twitter", icon: "twitter", href: "https://x.com/mct_NN" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/mustafacemtaskinn/" },
];

export const techMarquee = [
  "JavaScript", "React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL", "MongoDB",
];

export const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımda", href: "/about" },
  { name: "Yetenekler", href: "/skills" },
  { name: "Projeler", href: "/projects" },
  { name: "İletişim", href: "/contact" },
];

export const heroFeatures = [
  {
    icon: "code",
    title: "Modern Geliştirme",
    desc: "Güncel teknolojiler ve yaklaşımlarla yazılım geliştiriyorum",
  },
  {
    icon: "laptop",
    title: "Responsive Tasarım",
    desc: "Tüm cihazlarda iyi çalışan arayüzler tasarlıyorum",
  },
  {
    icon: "brain",
    title: "Problem Çözme",
    desc: "Karmaşık sorunları adım adım çözüme kavuşturuyorum",
  },
  {
    icon: "mobile",
    title: "Kullanıcı Deneyimi",
    desc: "Kullanımı kolay ve sezgisel arayüzler oluşturuyorum",
  },
];

// type: "counter" -> sayaç animasyonu (value + suffix), "text" -> sabit metin (display)
export const aboutStats = [
  { label: "Deneyim", type: "counter", value: 6, suffix: "+ Yıl" },
  { label: "Aktif Rol", type: "counter", value: 4, suffix: "" },
  { label: "Diller", type: "text", display: "JavaScript, TypeScript" },
  { label: "Frontend", type: "text", display: "React, Next.js" },
  { label: "Backend", type: "text", display: "Node.js, Express" },
  { label: "Veritabanı", type: "text", display: "MongoDB, PostgreSQL" },
];

// LinkedIn'deki sıralamayla birebir aynı (bazı roller eş zamanlı devam ediyor).
export const experience = [
  { period: "2025 - Günümüz", title: "Çakıroğlu Ticaret", subtitle: "E-ticaret Koordinatörü" },
  { period: "2024 - Günümüz", title: "Levirise", subtitle: "CTO" },
  { period: "2020 - Günümüz", title: "Stark Bilişim", subtitle: "Kurucu" },
  { period: "2024 - Günümüz", title: "Roman Gençlik Derneği", subtitle: "IT Personeli" },
  { period: "2023", title: "Gocce Reklam ve Yazılım Ajansı", subtitle: "Software Developer (4 ay)" },
];

export const education = [
  {
    period: "2020 - 2023",
    title: "Sakarya Uygulamalı Bilimler Üniversitesi",
    subtitle: "Önlisans, Bilgisayar Programcılığı (Karasu MYO)",
  },
  {
    period: "2016 - 2020",
    title: "Sabancı Mesleki ve Teknik Anadolu Lisesi",
    subtitle: "Lise Diploması, Bilişim Teknolojileri",
  },
];

export const technicalSkillTags = [
  "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js",
  "Node.js", "Express", "MongoDB", "PostgreSQL",
  "RESTful API", "GraphQL", "TailwindCSS", "Git/GitHub",
];

// icon: components/ui/icon-map.js içindeki anahtarlarla eşleşir
export const frontendSkills = [
  { name: "JavaScript", icon: "javascript", level: 90 },
  { name: "TypeScript", icon: "typescript", level: 85 },
  { name: "React", icon: "react", level: 90 },
  { name: "Next.js", icon: "nextjs", level: 85 },
  { name: "TailwindCSS", icon: "tailwindcss", level: 90 },
  { name: "Responsive Design", icon: "responsive", level: 85 },
];

export const backendSkills = [
  { name: "Node.js", icon: "nodejs", level: 85 },
  { name: "Express", icon: "express", level: 80 },
  { name: "MongoDB", icon: "mongodb", level: 80 },
  { name: "PostgreSQL", icon: "postgresql", level: 75 },
  { name: "RESTful API", icon: "server", level: 85 },
  { name: "Git/GitHub", icon: "git", level: 85 },
];

export const otherSkills = [
  { name: "Docker", icon: "docker", level: 70 },
  { name: "AWS", icon: "aws", level: 65 },
  { name: "Clean Code", icon: "code", level: 85 },
  { name: "Database Design", icon: "database", level: 80 },
];

// status: "live" -> demo linki doğrulanmış şekilde çalışıyor, demoHref gösterilir.
// status: "delivered" -> Stark Bilişim bünyesinde tamamlanmış gerçek bir müşteri projesi,
//   ama şu an genel erişime açık bir demo linki yok (rozet bunu dürüstçe belirtir).
export const projects = [
  {
    id: "sutlu-cup",
    title: "Sütlü Cup",
    description: "Stark Bilişim bünyesinde geliştirdiğimiz, bir tatlı/içecek markası için masaüstü ve mobil uyumlu web sitesi.",
    tags: ["Web Development", "UI/UX", "Responsive Design"],
    status: "live",
    demoHref: "https://sutlucup.com",
  },
  {
    id: "bess-butik",
    title: "BESS Butik",
    description: "Stark Bilişim bünyesinde geliştirdiğimiz, masaüstü ve mobil uyumlu bir e-ticaret web sitesi.",
    tags: ["E-ticaret", "Responsive Design", "UI/UX"],
    status: "delivered",
  },
  {
    id: "portfolyo-sitesi",
    title: "Kişisel Portföy Sitesi",
    description: "Şu an görüntülediğiniz site — Next.js ve TailwindCSS ile geliştirilmiş, modern ve duyarlı kişisel portföy.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "GSAP"],
    status: "live",
    demoHref: "/",
    githubHref: "https://github.com/mctNN",
  },
];
