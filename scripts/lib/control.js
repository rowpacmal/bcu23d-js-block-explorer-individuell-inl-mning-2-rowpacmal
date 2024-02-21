import checkWallet from './func/check-wallet.js';
import { sendFunds } from './func/send-funds.js';
import { searchBlock } from './func/search-block.js';
import { getBlocks } from './func/get-block-history.js';
import { clearBlockExplorer } from './func/clear-explorer.js';
import toggleWalletHistory from './func/toggle-wallet-history.js';

export function appControl() {
  const senderAddressInput = document.querySelector('#sender-address');
  const transactionAmountInput = document.querySelector('#amount');
  const receiverAddressInput = document.querySelector('#receiver-address');
  const searchBarInput = document.querySelector('#search-bar');

  const checkBalanceButton = document.querySelector('#check-balance');
  const sendTransactionButton = document.querySelector('#send-funds');
  const searchButton = document.querySelector('#search');
  const checkBlockButton = document.querySelector('#check-block');
  const clearBlockButton = document.querySelector('#clear-block');
  const toggleWalletHistoryButton = document.querySelector(
    '#toggle-wallet-history'
  );

  const balanceDisplay = document.querySelector('#balance');
  const currentBlockDisplay = document.querySelector('#current-block');
  const blockHistoryDisplay = document.querySelector('#display-block');
  const walletHistoryDisplay = document.querySelector('#display-ledger');
  const walletHistoryDisplayContainer = document.querySelector(
    '#display-ledger-container'
  );

  const walletHistoryCount = document.querySelector('#ledger-total');
  const blockList = [];

  checkBalanceButton.addEventListener('click', () => {
    checkWallet(
      senderAddressInput,
      balanceDisplay,
      walletHistoryDisplay,
      walletHistoryCount
    );
  });
  sendTransactionButton.addEventListener('click', () => {
    sendFunds(senderAddressInput, transactionAmountInput, receiverAddressInput);
  });
  searchButton.addEventListener('click', () => {
    searchBlock(searchBarInput, currentBlockDisplay, blockHistoryDisplay);
  });
  checkBlockButton.addEventListener('click', () => {
    getBlocks(blockList, currentBlockDisplay, blockHistoryDisplay);
  });
  clearBlockButton.addEventListener('click', () => {
    clearBlockExplorer(
      searchBarInput,
      currentBlockDisplay,
      blockHistoryDisplay
    );
  });
  toggleWalletHistoryButton.addEventListener('click', () => {
    toggleWalletHistory(
      toggleWalletHistoryButton,
      walletHistoryDisplayContainer
    );
  });
}
