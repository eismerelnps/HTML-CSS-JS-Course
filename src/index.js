const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Almacenar la selección de tema
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});

// Aplicar el tema guardado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  }
});
