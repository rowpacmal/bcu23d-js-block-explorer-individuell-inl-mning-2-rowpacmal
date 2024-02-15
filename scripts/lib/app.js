const web3 = new Web3(
  'https://sepolia.infura.io/v3/da5525411c684234a40d9f40b756f285'
);

const walletAddressInput = document.querySelector('#wallet-address');
const checkBalanceButton = document.querySelector('#check-balance');
const balanceDisplay = document.querySelector('#balance-display');
const historyDisplay = document.querySelector('#block-display');

async function initApp() {}

async function checkWallet() {
  /*   const address = walletAddressInput.value;
  const balance = await web3.eth.getBalance(address);
  const toEther = web3.utils.fromWei(balance, 'ether').split('.');

  balanceDisplay.innerHTML = `<i class="fa-brands fa-ethereum"></i> ${toEther[0]}<span class="faded-txt">.${toEther[1]}</span> ETH`;

  const block = await web3.eth.getBlock('latest');
  const transactions = block.transactions;

  if (block !== null && transactions !== null) {
    console.log(block);
    displayHistory(transactions.slice(0, 10));
  } */
}

/* async function displayHistory(transactions) {
  historyDisplay.innerHTML = 'Loading...';
  const history = [];

  for (let hash of transactions) {
    const transaction = await web3.eth.getTransaction(hash);
    const obj = {
      from: transaction.from,
      to: transaction.to,
      value: web3.utils.fromWei(transaction.value, 'ether'),
    };

    history.push(obj);
  }

  historyDisplay.innerHTML = '';

  history.forEach((transaction) => {
    createHistory(transaction);
  });
}

function createHistory(transaction) {
  historyDisplay.innerHTML += `  
    <span>From: ${transaction.from}</span><br />
    <span>To: ${transaction.to}</span><br />
    <span>Amount: ${transaction.value} ETH</span><br /><br />`;
} */

document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', checkWallet);
