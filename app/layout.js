import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mustafa Cem | Fullstack Yazılım Geliştirici",
  description: "Fullstack yazılım geliştirici Mustafa Cem'in kişisel web sitesi. JavaScript, React, Next.js, Node.js ve daha fazlası.",
  keywords: ["Mustafa Cem", "Yazılım Geliştirici", "Fullstack Developer", "JavaScript", "React", "Next.js", "Node.js", "Web Geliştirme"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
