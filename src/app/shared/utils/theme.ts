export const setTheme = (theme?: "dark" | "light") => {
  // sauvegarde du choix du theme
  if (theme) {
    localStorage.theme = theme;
  } else {
    localStorage.removeItem("theme");
  }

  // application du theme
  if (
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
