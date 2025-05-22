"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 border rounded-md ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      Current Theme: {theme} (Click to toggle)
    </button>
  );
}
