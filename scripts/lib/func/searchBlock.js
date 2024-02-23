import Notifications from '../../components/buildNotifications.js';
import buildTransactionList from '../../components/buildTransactionList.js';
import BuildDefaultComponents from '../../components/misc/BuildDefaultComponents.js';
import clearDisplay from './clearDisplay.js';

const searchBlock = async (
  notificationsContainer,
  searchBarInput,
  currentBlockDisplay,
  blockHistoryDisplay
) => {
  if (searchBarInput.value) {
    blockHistoryDisplay.innerHTML = BuildDefaultComponents.noHistory;
    currentBlockDisplay.innerText = BuildDefaultComponents.loading;

    const block = await ethereum.request({
      method: 'eth_getBlockByNumber',
      params: ['0x' + Number(searchBarInput.value).toString(16), true],
    });

    const blockNumber = parseInt(block.number);
    const transactions = block.transactions;

    if (block !== null && transactions !== null) {
      currentBlockDisplay.innerText = blockNumber;

      if (transactions.length) {
        clearDisplay(blockHistoryDisplay);

        transactions.forEach((transaction) =>
          buildTransactionList(transaction, blockHistoryDisplay)
        );
      } else {
        blockHistoryDisplay.innerHTML = BuildDefaultComponents.noHistory;
      }
    }
  } else {
    Notifications.notAValidSearch(notificationsContainer);
  }
};

export default searchBlock;
