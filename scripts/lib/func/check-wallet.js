import getWalletHistory from './get-wallet-history.js';
import BuildDefaultComponents from '../../components/misc/build-default.js';
import verifyWalletAddress from './verify-wallet-address.js';
import Notifications from '../../components/build-notifications.js';

const checkWallet = async (
  notificationsContainer,
  walletAddress,
  balanceDisplay,
  historyDisplay,
  historyCount
) => {
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
