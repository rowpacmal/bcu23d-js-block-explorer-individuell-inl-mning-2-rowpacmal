import { createTransactionList } from '../../components/build-list.js';
import { defaultBalance, defaultMessage } from '../../components/build-misc.js';
import apiKey from '../../utils/config.js';

export async function checkWallet(
  walletAddress,
  balanceDisplay,
  historyDisplay,
  historyCount
) {
  if (typeof ethereum !== 'undefined') {
    if (walletAddress.value) {
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [walletAddress.value, 'latest'],
      });

      const parseBalance = parseInt(balance) / Math.pow(10, 18);

      balanceDisplay.innerText = parseBalance.toFixed(4);

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      let apiEndpoint = null;

      switch (chainId) {
        case '0x1':
          apiEndpoint = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress.value}&apikey=${apiKey}`;
          break;
        case '0xaa36a7':
          apiEndpoint = `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${walletAddress.value}&apikey=${apiKey}`;
          break;
        default:
          console.warn(
            `The application is not configured for the selected network. Transaction history may not be recorded as expected. Verify your wallet settings for the correct supported network (mainnet, testnet, etc.). If issues persist, consult the application's documentation or contact support for assistance.`
          );
          break;
      }

      if (apiEndpoint !== null) {
        historyDisplay.innerHTML = defaultMessage();
        historyCount.innerText = '(Loading...)';

        try {
          const response = await fetch(apiEndpoint);
          const data = await response.json();
          const transactions = data.result.sort(
            (a, b) => b.timeStamp - a.timeStamp
          );

          if (transactions.length) {
            historyDisplay.innerHTML = '';

            const count = 5;

            for (let i = 0; i < count; i++) {
              createTransactionList(
                transactions[i],
                historyDisplay,
                walletAddress.value
              );
            }

            historyCount.innerText = `(Top ${count})`;
          } else {
            historyDisplay.innerHTML = defaultMessage();
            historyCount.innerText = '(---)';
          }
        } catch (error) {
          throw error;
        }
      }
    } else {
      balanceDisplay.innerText = defaultBalance();
      historyDisplay.innerHTML = defaultMessage();
      historyCount.innerText = '(---)';
    }
  }
}
