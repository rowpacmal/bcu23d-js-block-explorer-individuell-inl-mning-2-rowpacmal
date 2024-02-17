import { buildApp } from '../components/build-app.js';
import { buildNoWallet } from '../components/build-nowallet.js';
import { buildWelcome } from '../components/build-welcome.js';
import { appFunc } from './func.js';
import { appNoWallet } from './nowallet.js';
import { appWelcome } from './welcome.js';

const rootElement = document.querySelector('#root');

async function initApp() {
  if (typeof ethereum !== 'undefined') {
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length > 0) {
      buildApp(rootElement);
      appFunc();
    } else {
      buildWelcome(rootElement);
      appWelcome();
    }
  } else {
    buildNoWallet(rootElement);
    appNoWallet();
  }
}

async function reloadMetaMask() {
  location.reload();
}

document.addEventListener('DOMContentLoaded', initApp);
ethereum.on('accountsChanged', reloadMetaMask);
