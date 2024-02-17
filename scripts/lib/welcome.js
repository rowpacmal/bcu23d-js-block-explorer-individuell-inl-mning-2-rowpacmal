export function appWelcome() {
  const connectWalletButton = document.querySelector('#connect-wallet');
  connectWalletButton.addEventListener('click', connectWallet);
}

async function connectWallet() {
  await ethereum.request({ method: 'eth_requestAccounts' });
}
