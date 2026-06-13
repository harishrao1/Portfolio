import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function buildVars(hex) {
  const { r, g, b } = hexToRgb(hex);
  const rgba = (a) => `rgba(${r},${g},${b},${a})`;
  return {
    "--accent":             hex,
    "--accent-04":          rgba(0.04),
    "--accent-06":          rgba(0.06),
    "--accent-08":          rgba(0.08),
    "--accent-10":          rgba(0.10),
    "--accent-15":          rgba(0.15),
    "--accent-20":          rgba(0.20),
    "--accent-25":          rgba(0.25),
    "--accent-30":          rgba(0.30),
    "--accent-35":          rgba(0.35),
    "--accent-40":          rgba(0.40),
    "--accent-50":          rgba(0.50),
    "--accent-60":          rgba(0.60),
    "--accent-70":          rgba(0.70),
    "--accent-glow":        rgba(0.25),
    "--accent-glow-strong": rgba(0.45),
  };
}

export const THEMES = [
  { id: "amber",   name: "Gold",    color: "#f59e0b" },
  { id: "cyan",    name: "Cyan",    color: "#06b6d4" },
  { id: "violet",  name: "Violet",  color: "#8b5cf6" },
  { id: "emerald", name: "Emerald", color: "#10b981" },
  { id: "rose",    name: "Rose",    color: "#f43f5e" },
  { id: "blue",    name: "Blue",    color: "#3b82f6" },
  { id: "orange",  name: "Orange",  color: "#f97316" },
  { id: "fuchsia", name: "Fuchsia", color: "#d946ef" },
  { id: "teal",    name: "Teal",    color: "#14b8a6" },
  { id: "yellow",  name: "Yellow",  color: "#eab308" },
  { id: "purple",  name: "Purple",  color: "#a855f7" },
  { id: "sky",     name: "Sky",     color: "#0ea5e9" },
];

function applyTheme(hex) {
  const vars = buildVars(hex);
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return THEMES.find((t) => t.id === saved) ?? THEMES[0];
  });

  useEffect(() => {
    applyTheme(theme.color);
  }, [theme]);

  const setTheme = useCallback((t) => {
    setThemeState(t);
    localStorage.setItem("portfolio-theme", t.id);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
