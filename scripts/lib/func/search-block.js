import buildTransactionList from '../../components/build-transaction-list.js';
import { defaultLoading, defaultMessage } from '../../components/build-misc.js';

export async function searchBlock(
  searchBarInput,
  currentBlockDisplay,
  blockHistoryDisplay
) {
  currentBlockDisplay.innerText = defaultLoading();

  const block = await ethereum.request({
    method: 'eth_getBlockByNumber',
    params: ['0x' + Number(searchBarInput.value).toString(16), true],
  });

  const blockNumber = parseInt(block.number);
  const transactions = block.transactions;

  if (block !== null && transactions !== null) {
    currentBlockDisplay.innerText = blockNumber;

    if (transactions.length) {
      blockHistoryDisplay.innerHTML = '';

      for (let transaction of transactions) {
        buildTransactionList(transaction, blockHistoryDisplay);
      }
    } else {
      blockHistoryDisplay.innerHTML = defaultMessage();
    }
  } else {
    return null;
  }
}
