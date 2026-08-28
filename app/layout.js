import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { PageTransition } from "@/components/layout/PageTransition";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Mustafa Cem | Fullstack Yazılım Geliştirici",
  description: "Fullstack yazılım geliştirici Mustafa Cem'in kişisel web sitesi. JavaScript, React, Next.js, Node.js ve daha fazlası.",
  keywords: ["Mustafa Cem", "Yazılım Geliştirici", "Fullstack Developer", "JavaScript", "React", "Next.js", "Node.js", "Web Geliştirme"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} bg-bg text-fg antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <SmoothScrollProvider>
            <NoiseOverlay />
            <CustomCursor />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </Providers>
      </body>
    </html>
  );
}
