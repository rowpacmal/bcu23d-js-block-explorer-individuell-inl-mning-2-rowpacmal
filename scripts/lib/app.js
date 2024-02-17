import { buildApp } from '../components/build-app.js';
import { buildNoWallet } from '../components/build-nowallet.js';
import { buildWelcome } from '../components/build-welcome.js';
import { appControl } from './control.js';
import { appNoWallet } from './nowallet.js';
import { appWelcome } from './welcome.js';

const rootElement = document.querySelector('#root');
const warningElement = document.querySelector('#warning');

async function initApp() {
  if (typeof ethereum !== 'undefined') {
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length > 0) {
      buildApp(rootElement);
      appControl();
    } else {
      buildWelcome(rootElement);
      appWelcome();
    }

    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

    if (chainId !== '0xaa36a7') {
      notOnSepoliaTestnet();
    }
  } else {
    buildNoWallet(rootElement);
    appNoWallet();
  }
}

function notOnSepoliaTestnet() {
  warningElement.innerHTML =
    '<p>You are currently connected to a different blockchain than "Sepolia Testnet." To ensure the safety of your funds, it is strongly recommended to switch to the "Sepolia Testnet" before using this application.</p>';
  warningElement.style.opacity = 1;

  setTimeout(() => {
    warningElement.style.opacity = 0;

    setTimeout(() => {
      warningElement.innerHTML = '';
    }, 3000);
  }, 30000);
}

function reloadApp() {
  location.reload();
}

document.addEventListener('DOMContentLoaded', initApp);
ethereum.on('accountsChanged', reloadApp);
ethereum.on('chainChanged', reloadApp);
