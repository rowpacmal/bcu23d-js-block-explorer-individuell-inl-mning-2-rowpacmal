import { buildHeader } from './build-header.js';
import { buildFooter } from './build-footer.js';

export function buildWelcome(parent) {
  const container = document.createElement('main');
  container.appendChild(buildHeader());
  container.innerHTML += `
  <div class="wrapper">
    <section class="welcome-message">
      <h2>Welcome to Etheria!</h2>
      <p>
        We're excited to have you on board. To get started, please connect your wallet to unlock the full potential of our application.
      </p>

      <button
      id="connect-wallet"
      class="dark-btn wide-btn"
      >
        Connect Your Wallet
      </button>
    </section>
  </div>
  `;
  container.appendChild(buildFooter());

  parent.appendChild(container);
}
