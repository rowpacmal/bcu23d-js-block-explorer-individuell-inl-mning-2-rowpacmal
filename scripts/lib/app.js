const rpc = new Web3(
  'https://sepolia.infura.io/v3/da5525411c684234a40d9f40b756f285'
);

const walletAddressInput = document.querySelector('#wallet-address');
const checkBalanceButton = document.querySelector('#check-balance');
const balanceDisplay = document.querySelector('#balance-display');

async function initApp() {}

async function checkWalletBalance() {
  const address = walletAddressInput.value;
  const balance = await rpc.eth.getBalance(address);
  const toEther = rpc.utils.fromWei(balance, 'ether').split('.');

  balanceDisplay.innerHTML = `<i class="fa-brands fa-ethereum"></i> ${toEther[0]}<span class="faded-txt">.${toEther[1]}</span> ETH`;
}

document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', checkWalletBalance);
