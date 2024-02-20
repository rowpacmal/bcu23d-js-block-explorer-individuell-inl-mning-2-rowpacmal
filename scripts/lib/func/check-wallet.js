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

      historyDisplay.innerHTML = defaultMessage();
      historyCount.innerText = '(Loading...)';

      const apiEndpoint = `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${walletAddress.value}&apikey=${apiKey}`;

      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        const transactions = data.result;

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

          historyCount.innerText = `(${count} most recent transactions)`;
        } else {
          historyDisplay.innerHTML = defaultMessage();
          historyCount.innerText = '(---)';
        }
      } catch (error) {
        throw error;
      }
    } else {
      balanceDisplay.innerText = defaultBalance();
      historyDisplay.innerHTML = defaultMessage();
      historyCount.innerText = '(---)';
    }
  }
}
