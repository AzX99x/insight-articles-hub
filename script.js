const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

const searchInput = document.getElementById("searchInput");
const articleCards = document.querySelectorAll(".article-card");

searchInput?.addEventListener("input", (e) => {
  const query = e.target.value.trim().toLowerCase();

  articleCards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    const category = card.dataset.category.toLowerCase();
    const matches = title.includes(query) || category.includes(query);

    card.classList.toggle("hidden", !matches);
  });
});
