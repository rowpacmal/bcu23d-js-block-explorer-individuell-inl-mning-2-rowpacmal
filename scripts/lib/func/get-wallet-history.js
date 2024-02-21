import buildTransactionList from '../../components/build-transaction-list.js';
import BuildDefaultComponents from '../../components/misc/build-default.js';
import apiKey from '../../utils/config.js';

const getWalletHistory = async (
  walletAddress,
  historyDisplay,
  historyCount
) => {
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
    historyDisplay.innerHTML = BuildDefaultComponents.noHistory;
    historyCount.innerText = BuildDefaultComponents.loading;

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
          buildTransactionList(
            transactions[i],
            historyDisplay,
            walletAddress.value
          );
        }

        historyCount.innerText = `Top ${count}`;
      } else {
        historyDisplay.innerHTML = BuildDefaultComponents.noHistory;
        historyCount.innerText = BuildDefaultComponents.placeholder;
      }

      return data;
    } catch (error) {
      throw error;
    }
  } else {
    return null;
  }
};

export default getWalletHistory;
