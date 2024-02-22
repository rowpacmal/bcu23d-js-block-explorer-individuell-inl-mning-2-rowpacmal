import buildTransactionList from '../../components/build-transaction-list.js';
import BuildDefaultComponents from '../../components/misc/build-default.js';
import clearDisplay from './clear-display.js';

const searchBlock = async (
  searchBarInput,
  currentBlockDisplay,
  blockHistoryDisplay
) => {
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

      for (let transaction of transactions) {
        buildTransactionList(transaction, blockHistoryDisplay);
      }
    } else {
      blockHistoryDisplay.innerHTML = BuildDefaultComponents.noHistory;
    }
  } else {
    return null;
  }
};

export default searchBlock;
