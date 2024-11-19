import { useEffect, useState } from "react";

import DarkMode from "../icons/DarkMode";

const ToggleTheme = () => {
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-mode", theme); // Define o atributo
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme}>
      <DarkMode className="stroke-stone-950 dark:stroke-zinc-50" />
    </button>
  )
};

export default ToggleTheme;