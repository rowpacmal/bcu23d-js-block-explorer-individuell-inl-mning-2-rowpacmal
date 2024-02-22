const buildHeader = () => {
  const container = document.createElement('header');
  container.classList.add('hero');
  container.innerHTML = `
  <img
    src="./assets/images/ethereum-logo.webp"
    alt=""
    width="429"
    height="699"
    loading="lazy"
  />

  <h1>
    Etheria
  </h1>

  <p>
    Block Explorer
  </p>
  `;

  return container;
};

export default buildHeader;
