import buildTransactionList from '../../components/build-transaction-list.js';
import BuildDefaultComponents from '../../components/misc/build-default.js';
import getEtherscanApi from '../../utils/etherscanApi.js';
import clearDisplay from './clear-display.js';

const getWalletHistory = async (
  walletAddress,
  historyDisplay,
  historyCount
) => {
  historyDisplay.innerHTML = BuildDefaultComponents.noHistory;
  historyCount.innerText = BuildDefaultComponents.loading;

  const data = await getEtherscanApi(walletAddress);
  const transactions = data.result.sort((a, b) => b.timeStamp - a.timeStamp);

  if (transactions.length) {
    clearDisplay(historyDisplay);

    const count = 5;

    for (let i = 0; i < count; i++) {
      buildTransactionList(
        transactions[i],
        historyDisplay,
        walletAddress.value
      );
    }

    historyCount.innerText = BuildDefaultComponents.topHistory(count);
  } else {
    historyDisplay.innerHTML = BuildDefaultComponents.noHistory;
    historyCount.innerText = BuildDefaultComponents.placeholder;
  }
};

export default getWalletHistory;
