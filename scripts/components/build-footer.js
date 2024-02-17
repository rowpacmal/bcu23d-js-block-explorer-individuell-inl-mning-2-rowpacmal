export function buildFooter() {
  const container = document.createElement('footer');
  container.classList.add('copyright');
  container.innerHTML = `
  <p>
    Etheria &copy; 2024
  </p>
  `;

  return container;
}
