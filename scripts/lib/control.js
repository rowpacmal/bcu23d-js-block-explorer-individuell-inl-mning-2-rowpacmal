import { checkWallet } from './func/check-wallet.js';
import { sendFunds } from './func/send-funds.js';
import { searchBlock } from './func/search-block.js';
import { getBlocks } from './func/get-blocks.js';
import { clearBlockExplorer } from './func/clear-explorer.js';

export function appControl() {
  const checkBalanceButton = document.querySelector('#check-balance');
  const balanceDisplay = document.querySelector('#balance');
  const historyDisplay = document.querySelector('#display-history');
  const senderAddressInput = document.querySelector('#sender-address');
  const transactionAmountInput = document.querySelector('#amount');
  const receiverAddressInput = document.querySelector('#receiver-address');
  const sendTransactionButton = document.querySelector('#send-funds');
  const searchBarInput = document.querySelector('#search-bar');
  const searchButton = document.querySelector('#search');
  const currentBlock = document.querySelector('#block-number');
  const checkBlockButton = document.querySelector('#check-block');
  const clearBlockButton = document.querySelector('#clear-block');
  const blockList = [];

  checkBalanceButton.addEventListener('click', () => {
    checkWallet(senderAddressInput, balanceDisplay);
  });
  sendTransactionButton.addEventListener('click', () => {
    sendFunds(senderAddressInput, transactionAmountInput, receiverAddressInput);
  });
  searchButton.addEventListener('click', () => {
    searchBlock(searchBarInput, currentBlock, historyDisplay);
  });
  checkBlockButton.addEventListener('click', () => {
    getBlocks(blockList, currentBlock, historyDisplay);
  });
  clearBlockButton.addEventListener('click', () => {
    clearBlockExplorer(searchBarInput, currentBlock, historyDisplay);
  });
}
