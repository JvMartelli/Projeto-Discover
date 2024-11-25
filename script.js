const themes = ["light", "dark", "blue"];
let currentThemeIndex = 0;

function toggleMode() {
  const html = document.documentElement;

  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const newTheme = themes[currentThemeIndex];

  html.className = newTheme; // Define a nova classe para o tema
}
