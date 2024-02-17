export function appWelcome() {
  const connectWalletButton = document.querySelector('#connect-wallet');

  async function connectWallet() {
    await ethereum.request({ method: 'eth_requestAccounts' });
    location.reload();
  }

  connectWalletButton.addEventListener('click', connectWallet);
}
