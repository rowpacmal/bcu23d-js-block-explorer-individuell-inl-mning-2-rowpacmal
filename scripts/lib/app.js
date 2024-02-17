import { buildApp } from '../components/build-app.js';
import { buildWelcome } from '../components/build-welcome.js';
import { appFunc } from './func.js';
import { appWelcome } from './welcome.js';

const rootElement = document.querySelector('#root');

/* const connectWalletButton = document.querySelector('#connect-wallet');
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
const clearBlockButton = document.querySelector('#clear-block'); */

async function initApp() {
  if (typeof ethereum !== 'undefined') {
    console.info('MetaMask is installed!');
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length > 0) {
      buildApp(rootElement);
      appFunc();
    } else {
      buildWelcome(rootElement);
      appWelcome();
    }
  } else {
    console.warn('MetaMask is not installed!');
  }
}

/* async function connectWallet() {
  await ethereum.request({ method: 'eth_requestAccounts' });
}

async function checkWallet() {
  if (typeof ethereum !== 'undefined') {
    if (senderAddressInput.value) {
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [senderAddressInput.value, 'latest'],
      });

      const parseBalance = parseInt(balance) / Math.pow(10, 18);

      balanceDisplay.innerText = parseBalance.toFixed(4);
    } else {
      balanceDisplay.innerText = '0.00';
    }
  }
}

async function sendFunds() {
  if (typeof ethereum !== 'undefined') {
    if (
      senderAddressInput.value &&
      transactionAmountInput.value &&
      receiverAddressInput.value
    ) {
      try {
        const fund =
          parseFloat(transactionAmountInput.value) * Math.pow(10, 18);

        const response = await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              to: receiverAddressInput.value,
              from: senderAddressInput.value,
              value: Number(fund).toString(16),
              gas: Number(21000).toString(16),
              gasPrice: Number(2502020).toString(16),
            },
          ],
        });

        console.info(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
}

async function searchBlock() {
  currentBlock.innerText = 'Loading...';

  if (typeof ethereum !== 'undefined') {
    const block = await ethereum.request({
      method: 'eth_getBlockByNumber',
      params: ['0x' + Number(searchBarInput.value).toString(16), true],
    });

    const blockNumber = parseInt(block.number);
    const transactions = block.transactions;

    if (block !== null && transactions !== null) {
      currentBlock.innerText = blockNumber;

      if (transactions.length) {
        displayHistory(transactions);
      } else {
        historyDisplay.innerHTML = `
        <div class="block-container">
          <span>
            No history has been recorded yet...
          </span>
        </div>
        `;
      }
    }
  }
}

function displayHistory(transactions) {
  historyDisplay.innerHTML = '';

  for (let transaction of transactions) {
    createTransactionList(transaction);
  }
}

function createTransactionList(transaction) {
  const parseValue = parseInt(transaction.value) / Math.pow(10, 18);

  historyDisplay.innerHTML += `
    <div class="block-container">
      <span>
        <i class="fa-solid fa-right-from-bracket"></i> ${transaction.from}
      </span>

      <span>
        <i class="fa-solid fa-right-to-bracket"></i> ${transaction.to}
      </span>

      <span>
        <i class="fa-solid fa-receipt"></i>
        <i class="fa-brands fa-ethereum"></i> ${+parseValue} ETH
      </span>
    </div>
    `;
}

async function getBlocks() {
  if (currentBlock.innerText !== 'Loading...') {
    currentBlock.innerText = 'Loading...';

    while (blockList.length > 0) {
      blockList.pop();
    }

    if (typeof ethereum !== 'undefined') {
      const latestBlockNumber = await ethereum.request({
        method: 'eth_blockNumber',
      });

      for (let i = latestBlockNumber; i > latestBlockNumber - 10; i--) {
        const block = await ethereum.request({
          method: 'eth_getBlockByNumber',
          params: ['0x' + Number(i).toString(16), true],
        });

        blockList.push({
          number: block.number,
          hash: block.hash,
        });
      }
    }

    historyDisplay.innerHTML = '';

    for (let block of blockList) {
      createBlockList(block);
    }

    currentBlock.innerText = `Latest ${blockList.length} Blocks`;
  }
}

function createBlockList(block) {
  historyDisplay.innerHTML += `
    <div class="block-container">
      <span>
      <i class="fa-solid fa-cube"></i> ${parseInt(block.number)}
      </span>

      <span>
        <i class="fa-solid fa-hashtag"></i> ${block.hash}
      </span>
    </div>
    `;
}

function clearBlockExplorer() {
  searchBarInput.value = '';

  currentBlock.innerText = '---';

  historyDisplay.innerHTML = `
    <div class="block-container">
      <span>
        No history has been recorded yet...
      </span>
    </div>
    `;
}


connectWalletButton.addEventListener('click', connectWallet);
checkBalanceButton.addEventListener('click', checkWallet);
sendTransactionButton.addEventListener('click', sendFunds);
searchButton.addEventListener('click', searchBlock);
checkBlockButton.addEventListener('click', getBlocks);
clearBlockButton.addEventListener('click', clearBlockExplorer);
 */
document.addEventListener('DOMContentLoaded', initApp);
