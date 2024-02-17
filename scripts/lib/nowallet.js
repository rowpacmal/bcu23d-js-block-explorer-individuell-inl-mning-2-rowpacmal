export function appNoWallet() {
  const getMetaMaskButton = document.querySelector('#get-metamask');
  getMetaMaskButton.addEventListener('click', getMetaMask);
}

async function getMetaMask() {
  location.href = 'https://metamask.io/';
}
