import { buildApp } from '../components/build-app.js';
import { buildNoWallet } from '../components/build-nowallet.js';
import { buildWelcome } from '../components/build-welcome.js';
import { notOnSepoliaTestnet } from '../components/build-notifications.js';
import { appControl } from './control.js';
import { appNoWallet } from './nowallet.js';
import { appWelcome } from './welcome.js';

const rootContainer = document.querySelector('#root');
const notificationsContainer = document.querySelector('#notifications');

async function initApp() {
  if (typeof ethereum !== 'undefined') {
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length > 0) {
      buildApp(rootContainer);
      appControl();
    } else {
      buildWelcome(rootContainer);
      appWelcome();
    }

    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

    if (chainId !== '0xaa36a7') {
      notOnSepoliaTestnet(notificationsContainer);
    }
  } else {
    buildNoWallet(rootContainer);
    appNoWallet();
  }
}

function reloadApp() {
  location.reload();
}

document.addEventListener('DOMContentLoaded', initApp);
ethereum.on('accountsChanged', reloadApp);
ethereum.on('chainChanged', reloadApp);
