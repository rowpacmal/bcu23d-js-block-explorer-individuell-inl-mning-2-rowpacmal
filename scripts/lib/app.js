const walletAddressInput = document.querySelector('#wallet-address');
const checkBalanceButton = document.querySelector('#check-balance');
const balanceDisplay = document.querySelector('#balance-display');
const historyDisplay = document.querySelector('#block-display');
const senderAddressInput = document.querySelector('#sender-address');
const transactionAmountInput = document.querySelector('#transaction-amount');
const receiverAddressInput = document.querySelector('#receiver-address');
const sendTransactionButton = document.querySelector('#send-transaction');

let test = null;
test = true;

if (test) {
  console.log('ok');
} else {
  console.log('no');
}

async function initApp() {
  if (typeof ethereum !== 'undefined') {
    console.info('MetaMask is installed!');

    const wallet = await ethereum.request({ method: 'eth_requestAccounts' });

    if (wallet) {
      console.info('Wallet is connected!');
    }
  } else {
    console.warn('MetaMask is not installed!');
  }
}

/* async function checkCurrentBlock() {
  const blockNum = await ethereum.request({
    method: 'eth_blockNumber',
  });
  console.log(parseInt(blockNum));
}

setInterval(checkCurrentBlock, 5000); */

async function checkWallet() {
  if (typeof ethereum !== 'undefined') {
    await ethereum.request({ method: 'eth_requestAccounts' });

    if (walletAddressInput.value) {
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [walletAddressInput.value, 'latest'],
      });

      const parseBalance = parseInt(balance) / Math.pow(10, 18);

      balanceDisplay.innerHTML = `<i class="fa-brands fa-ethereum"></i> ${parseBalance} ETH`;

      const block = await ethereum.request({
        method: 'eth_getBlockByNumber',
        params: ['latest', true],
      });

      const blockNumber = parseInt(block.number);
      const transactions = block.transactions;

      if (block !== null && transactions !== null) {
        displayHistory(transactions);
      }
    } else {
      console.warn('Warning: "Explorer" has an empty field!');
    }
  }
}

async function displayHistory(transactions) {
  historyDisplay.innerHTML = '';

  for (let transaction of transactions) {
    createTransactionList(transaction);
  }
}

function createTransactionList(transaction) {
  const parseBlock = parseInt(transaction.blockNumber);
  const parseValue = parseInt(transaction.value) / Math.pow(10, 18);

  historyDisplay.innerHTML += `
    <span>Block: ${parseBlock}</span>
    <br />
    <span>From: ${transaction.from}</span>
    <br />
    <span>To: ${transaction.to}</span>
    <br />
    <span><i class="fa-brands fa-ethereum"></i> ${parseValue} ETH</span>
    <br /><br />`;
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
    } else {
      console.warn('Warning: "Exchanger" has one or more empty fields!');
    }
  }
}

document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', checkWallet);
sendTransactionButton.addEventListener('click', sendFunds);
