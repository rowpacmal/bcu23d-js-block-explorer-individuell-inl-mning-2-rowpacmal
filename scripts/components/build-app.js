export function buildApp(parent) {
  const container = document.createElement('main');

  container.innerHTML = `
  <header class="hero">
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
  </header>

  <div class="wrapper">
    <div class="wallet">
      <div class="input">
        <label for="sender-address">
        <i class="fa-solid fa-right-from-bracket"></i>
        Sender
        </label>

        <input
          type="text"
          id="sender-address"
          placeholder="Wallet address..."
        />
      </div>

      <div class="balance-container">
        <i class="fa-brands fa-ethereum"></i>

        <span id="balance">0.00</span> ETH
      </div>

      <button id="check-balance">
        Check
      </button>
    </div>

    <div class="transaction">
      <div class="input">
        <label for="amount">
          <i class="fa-solid fa-receipt"></i>
          Amount
        </label>

        <input
          type="number"
          id="amount"
          placeholder="1.00"
        />
      </div>

      <div class="input">
        <label for="receiver-address">
          <i class="fa-solid fa-right-to-bracket"></i>
          Receiver
        </label>

        <input
          type="text"
          id="receiver-address"
          placeholder="Wallet address..."
        />
      </div>

      <button
        id="send-funds"
        class="dark-btn"
      >
        Send
      </button>
    </div>

    <div class="block-explorer">
      <div class="block-explorer-header">
        <input
          type="number"
          id="search-bar"
          placeholder="Search..."
        />

        <div class="button-container">
          <button id="search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>

          <button id="check-block">
            Get
          </button>

          <button id="clear-block">
            Clear
          </button>
        </div>
      </div>

      <div class="block-number-container">
        <i class="fa-solid fa-cube"></i>

        <span id="block-number">
          ---
        </span>
      </div>

      <div id="display-history">
        <div class="block-container">
          <span>
            No history has been recorded yet...
          </span>
        </div>
      </div>
    </div>
  </div>

  <footer class="copyright">
    <p>
      Etheria &copy; 2024
    </p>
  </footer>
  `;

  parent.appendChild(container);
}