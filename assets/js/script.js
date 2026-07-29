document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector("#theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function setTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    if (themeToggle) {
      themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  setTheme(savedTheme ? savedTheme === "dark" : prefersDark);

  themeToggle?.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    setTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  navToggle?.addEventListener("click", () => {
    const isOpen = nav?.classList.toggle("is-open") ?? false;
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
});
