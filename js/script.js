// Botón que cambia entre modo claro y modo oscuro
const themeToggle = document.getElementById("theme-toggle");

// Revisar si el usuario ya había guardado una preferencia
const savedTheme = localStorage.getItem("theme");

// Si la preferencia guardada es "dark", se activa el modo oscuro al cargar la página
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "Modo claro";
  themeToggle.setAttribute("aria-label", "Cambiar a modo claro");
}

// Evento click para cambiar el tema
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");

  if (isDarkMode) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "Modo claro";
    themeToggle.setAttribute("aria-label", "Cambiar a modo claro");
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "Modo oscuro";
    themeToggle.setAttribute("aria-label", "Cambiar a modo oscuro");
  }
});