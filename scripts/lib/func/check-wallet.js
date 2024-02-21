import { defaultBalance, defaultMessage } from '../../components/build-misc.js';
import getWalletHistory from './get-wallet-history.js';

const checkWallet = async (
  walletAddress,
  balanceDisplay,
  historyDisplay,
  historyCount
) => {
  if (typeof ethereum !== 'undefined') {
    if (walletAddress.value) {
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [walletAddress.value, 'latest'],
      });

      const parseBalance = parseInt(balance) / Math.pow(10, 18);

      balanceDisplay.innerText = parseBalance.toFixed(4);

      await getWalletHistory(walletAddress, historyDisplay, historyCount);
    } else {
      balanceDisplay.innerText = defaultBalance();
      historyDisplay.innerHTML = defaultMessage();
      historyCount.innerText = '(---)';

      return null;
    }
  }
};

export default checkWallet;
