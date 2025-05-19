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
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"}
    >
      {theme === "dark" ? <FiSun className="text-yellow-400" /> : <FiMoon />}
    </button>
  );
} 