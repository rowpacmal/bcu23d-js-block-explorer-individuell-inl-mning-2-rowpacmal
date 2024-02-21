import { buildHeader } from './build-header.js';
import { buildFooter } from './build-footer.js';
import {
  defaultBalance,
  defaultMessage,
  defaultPlaceholder,
} from './build-misc.js';

export function buildApp(parent) {
  const container = document.createElement('main');
  container.appendChild(buildHeader());
  container.innerHTML += `
  <div class="wrapper">
    <div class="wrapper-header">
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

          <span id="balance">
            ${defaultBalance()}
          </span> ETH
        </div>

        <button id="check-balance">
          Check
        </button>
      </div>

      <div class="address-history">
        <div class="address-history-container">
          <h2>
            <i class="fa-solid fa-clock-rotate-left"></i>
            History
            <span id="ledger-total">
              (---)
            </span>
          </h2>

          <button id="toggle-wallet-history">
            Show
            <i class="fa-solid fa-caret-down"></i>
          </button>
        </div>
      
        <div id="display-ledger-container" style="display:none;">
          <div id="display-ledger">
            ${defaultMessage()}
          </div>
        </div>
      </div>
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

      <div class="current-block-container">
        <i class="fa-solid fa-cube"></i>

        <span id="current-block">
          ${defaultPlaceholder()}
        </span>
      </div>

      <div id="display-block">
        ${defaultMessage()}
      </div>
    </div>
  </div>
  `;
  container.appendChild(buildFooter());

  parent.appendChild(container);
}
