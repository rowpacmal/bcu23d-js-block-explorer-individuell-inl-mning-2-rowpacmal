const checkBalanceButton = document.querySelector('#check-balance');
const balanceDisplay = document.querySelector('#balance');
const historyDisplay = document.querySelector('#display-history');
const senderAddressInput = document.querySelector('#sender-address');
const transactionAmountInput = document.querySelector('#amount');
const receiverAddressInput = document.querySelector('#receiver-address');
const sendTransactionButton = document.querySelector('#send-funds');
const currentBlock = document.querySelector('#block-number');
const checkBlockButton = document.querySelector('#check-block');

async function initApp() {
  if (typeof ethereum !== 'undefined') {
    console.info('MetaMask is installed!');
  } else {
    console.warn('MetaMask is not installed!');
  }
}

async function checkWallet() {
  if (typeof ethereum !== 'undefined') {
    await ethereum.request({ method: 'eth_requestAccounts' });

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
    await ethereum.request({ method: 'eth_requestAccounts' });

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

async function blockExplorer() {
  const block = await ethereum.request({
    method: 'eth_getBlockByNumber',
    params: ['latest', true],
  });

  const blockNumber = parseInt(block.number);
  const transactions = block.transactions;

  if (block !== null && transactions !== null) {
    currentBlock.innerText = blockNumber;
    displayHistory(transactions);
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
        From: ${transaction.from}
      </span>

      <span>
        To: ${transaction.to}
      </span>

      <span>
        Trx:
        <i class="fa-brands fa-ethereum"></i>
        ${parseValue.toFixed(4)} ETH
      </span>
    </div>
    `;
}

document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', checkWallet);
sendTransactionButton.addEventListener('click', sendFunds);
checkBlockButton.addEventListener('click', blockExplorer);
