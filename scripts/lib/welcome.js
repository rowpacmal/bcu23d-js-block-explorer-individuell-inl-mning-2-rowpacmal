const connectWallet = async () => {
  await ethereum.request({ method: 'eth_requestAccounts' });
};

const appWelcome = () => {
  const connectWalletButton = document.querySelector('#connect-wallet');
  connectWalletButton.addEventListener('click', connectWallet);
};

export default appWelcome;
