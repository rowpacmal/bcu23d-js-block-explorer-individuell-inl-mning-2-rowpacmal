const walletAddressInput = document.querySelector('#wallet-address');
const checkBalanceButton = document.querySelector('#check-balance');
const balanceDisplay = document.querySelector('#balance-display');
const historyDisplay = document.querySelector('#block-display');
const senderAddressInput = document.querySelector('#sender-address');
const transactionAmountInput = document.querySelector('#transaction-amount');
const receiverAddressInput = document.querySelector('#receiver-address');
const sendTransactionButton = document.querySelector('#send-transaction');

function initApp() {
  if (typeof ethereum !== 'undefined') {
    console.info('MetaMask is installed!');
  } else {
    console.warn('MetaMask is not installed!');
  }
}

async function checkWallet() {
  if (typeof ethereum !== 'undefined') {
    await ethereum.request({ method: 'eth_requestAccounts' });

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

    const transactions = block.transactions;
    console.log(transactions);
  }
}

async function sendFunds() {
  if (typeof ethereum !== 'undefined') {
    await ethereum.request({ method: 'eth_requestAccounts' });

    try {
      const fund = parseFloat(transactionAmountInput.value) * Math.pow(10, 18);
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

document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', checkWallet);
sendTransactionButton.addEventListener('click', sendFunds);
