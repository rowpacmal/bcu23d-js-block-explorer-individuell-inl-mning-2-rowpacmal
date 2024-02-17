import { buildHeader } from './build-header.js';
import { buildFooter } from './build-footer.js';

export function buildNoWallet(parent) {
  const container = document.createElement('main');
  container.appendChild(buildHeader());
  container.innerHTML += `
  <div class="wrapper">
    <section class="welcome-message">
      <h2>Welcome to Etheria!</h2>
      <p>
        We're thrilled to have you here. To unlock the full experience of our application, you'll need to install MetaMask, a secure and user-friendly cryptocurrency wallet for your browser. Once you have MetaMask installed, connect your wallet to start exploring and enjoying our app!
      </p>

      <button
      id="get-metamask"
      class="dark-btn wide-btn"
      >
        Get MetaMask
      </button>
    </section>
  </div>
  `;
  container.appendChild(buildFooter());

  parent.appendChild(container);
}
