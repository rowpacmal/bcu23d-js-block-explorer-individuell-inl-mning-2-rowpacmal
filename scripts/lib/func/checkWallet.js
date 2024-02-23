import getWalletHistory from './getWalletHistory.js';
import BuildDefaultComponents from '../../components/misc/BuildDefaultComponents.js';
import verifyWalletAddress from './verifyWalletAddress.js';
import Notifications from '../../components/buildNotifications.js';
import inputWarning from './inputWarning.js';

const checkWallet = async (
  notificationsContainer,
  walletAddress,
  balanceDisplay,
  historyDisplay,
  historyCount
) => {
  inputWarning([walletAddress]);

  if (verifyWalletAddress(walletAddress.value)) {
    const balance = await ethereum.request({
      method: 'eth_getBalance',
      params: [walletAddress.value, 'latest'],
    });

    const parseBalance = parseInt(balance) / Math.pow(10, 18);

    balanceDisplay.innerText = parseBalance.toFixed(4);

    await getWalletHistory(walletAddress, historyDisplay, historyCount);
  } else {
    Notifications.notAWalletAddress(notificationsContainer);

    balanceDisplay.innerText = BuildDefaultComponents.balance;
    historyDisplay.innerHTML = BuildDefaultComponents.noHistory;
    historyCount.innerText = BuildDefaultComponents.placeholder;
  }
};

export default checkWallet;
