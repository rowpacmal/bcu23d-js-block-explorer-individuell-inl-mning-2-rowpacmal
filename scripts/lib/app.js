import buildApp from '../components/buildApp.js';
import buildNoWallet from '../components/buildNoWallet.js';
import buildWelcome from '../components/buildWelcome.js';
import appControl from './control.js';
import appNoWallet from './noWallet.js';
import appWelcome from './welcome.js';
import Notifications from '../components/buildNotifications.js';

const rootContainer = document.querySelector('#root');
const notificationsContainer = document.querySelector('#notifications');

async function initApp() {
  if (typeof ethereum !== 'undefined') {
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length > 0) {
      buildApp(rootContainer);
      appControl(notificationsContainer);
    } else {
      buildWelcome(rootContainer);
      appWelcome();
    }

    const chainId = await ethereum.request({ method: 'eth_chainId' });

    if (chainId !== '0xaa36a7') {
      Notifications.notOnSepoliaTestnet(notificationsContainer);
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
