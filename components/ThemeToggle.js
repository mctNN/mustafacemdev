"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Sayfa yüklendikten sonra bileşeni göster (hidrasyon sorunlarını önlemek için)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Tema değiştirme işlevi
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Yükleme tamamlanana kadar bir şey gösterme
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center border-2 border-fg text-fg transition-colors hover:bg-accent hover:text-accent-fg"
      aria-label={theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
} 