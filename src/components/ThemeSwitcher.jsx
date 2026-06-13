import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";
import { THEMES, useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        title="Change accent color"
        className="flex items-center gap-2.5 w-full px-4 py-2.5 rounded-md
          text-gray-600 hover:text-gray-300 hover:bg-white/[0.03]
          text-[12px] font-medium transition-all duration-200"
      >
        <span
          className="w-3 h-3 rounded-full shrink-0 border border-white/10"
          style={{ backgroundColor: theme.color }}
        />
        <span>Color Theme</span>
        <Palette size={11} className="ml-auto opacity-60" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute bottom-full left-0 mb-2 w-full
                bg-[#161616] border border-white/[0.08] rounded-lg p-3 z-50
                shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            >
              <p className="text-[9px] font-semibold tracking-[0.28em] uppercase text-gray-600 mb-3">
                Select Color
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {THEMES.map((t) => {
                  const isActive = theme.id === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => { setTheme(t); setOpen(false); }}
                      title={t.name}
                      className={`relative flex flex-col items-center gap-1.5 p-2 rounded-md
                        transition-all duration-200 hover:bg-white/[0.06]
                        ${isActive ? "bg-white/[0.05]" : ""}`}
                    >
                      <span
                        className="w-5 h-5 rounded-full transition-transform duration-200 hover:scale-110"
                        style={{
                          backgroundColor: t.color,
                          boxShadow: isActive ? `0 0 10px ${t.color}80` : "none",
                        }}
                      />
                      <span className="text-[9px] text-gray-500 font-medium leading-none">
                        {t.name}
                      </span>
                      {isActive && (
                        <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-white/50" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
