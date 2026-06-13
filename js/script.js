// Botón que cambia entre modo claro y modo oscuro
const themeToggle = document.getElementById("theme-toggle");

// Revisar si el usuario ya había guardado una preferencia
const savedTheme = localStorage.getItem("theme");

// Aplicar modo oscuro si estaba guardado
if (themeToggle && savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "Modo claro";
  themeToggle.setAttribute("aria-label", "Cambiar a modo claro");
}

// Evento click para cambiar el tema
if (themeToggle) {
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
}

// Mensaje visual al enviar el formulario
const contactForm = document.querySelector("#contacto form");
const formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent = "Gracias por tu mensaje. Pronto te contactaremos.";
    contactForm.reset();
  });
}