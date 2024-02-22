const getMetaMask = () => {
  location.href = 'https://metamask.io/';
};

const appNoWallet = () => {
  const getMetaMaskButton = document.querySelector('#get-metamask');
  getMetaMaskButton.addEventListener('click', getMetaMask);
};

export default appNoWallet;
