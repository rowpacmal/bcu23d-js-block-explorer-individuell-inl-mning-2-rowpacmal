import checkWallet from './func/checkWallet.js';
import toggleWalletHistory from './func/toggleWalletHistory.js';
import sendFunds from './func/sendFunds.js';
import searchBlock from './func/searchBlock.js';
import getBlockHistory from './func/getBlockHistory.js';
import clearBlockExplorer from './func/clearBlockExplorer.js';

const appControl = (notificationsContainer) => {
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

  const walletHistoryCount = document.querySelector('#history-total');
  const blockList = [];

  checkBalanceButton.addEventListener('click', () => {
    checkWallet(
      notificationsContainer,
      senderAddressInput,
      balanceDisplay,
      walletHistoryDisplay,
      walletHistoryCount
    );
  });

  toggleWalletHistoryButton.addEventListener('click', () => {
    toggleWalletHistory(
      toggleWalletHistoryButton,
      walletHistoryDisplayContainer
    );
  });

  sendTransactionButton.addEventListener('click', () => {
    sendFunds(
      notificationsContainer,
      senderAddressInput,
      transactionAmountInput,
      receiverAddressInput
    );
  });

  searchButton.addEventListener('click', () => {
    searchBlock(
      notificationsContainer,
      searchBarInput,
      currentBlockDisplay,
      blockHistoryDisplay
    );
  });

  checkBlockButton.addEventListener('click', () => {
    getBlockHistory(blockList, currentBlockDisplay, blockHistoryDisplay);
  });

  clearBlockButton.addEventListener('click', () => {
    clearBlockExplorer(
      searchBarInput,
      currentBlockDisplay,
      blockHistoryDisplay
    );
  });
};

export default appControl;
