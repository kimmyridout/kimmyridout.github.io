document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // NAV ACTIVE STATE
  // -----------------------------
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage) currentPage = "index.html";

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // -----------------------------
  // DARK MODE TOGGLE
  // -----------------------------
  const themeToggle = document.querySelector("#theme-toggle");

  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "☀️ Light Mode";
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");

      localStorage.setItem("theme", isDark ? "dark" : "light");

      themeToggle.textContent = isDark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });
  }

  // -----------------------------
  // FILTERING PROJECTS + NOTES
  // -----------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        // remove active state
        filterButtons.forEach(btn =>
          btn.classList.remove("active-filter")
        );

        button.classList.add("active-filter");

        cards.forEach(card => {
          const category = card.dataset.category;

          if (filter === "all" || category === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

});