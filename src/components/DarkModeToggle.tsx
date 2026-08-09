"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    function applyStoredPreference() {
      const stored = localStorage.getItem("theme");
      const prefersDark = stored === "dark";
      setDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
    applyStoredPreference();
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button onClick={toggle} aria-label="Changer de thème" className="p-1.5 hover:text-terracotta-500 transition-colors">
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
