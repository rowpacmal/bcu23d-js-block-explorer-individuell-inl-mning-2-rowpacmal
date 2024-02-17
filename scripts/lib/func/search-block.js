import { createTransactionList } from '../../components/build-list.js';
import { defaultLoading, defaultMessage } from '../../components/build-misc.js';

export async function searchBlock(search, element, history) {
  element.innerText = defaultLoading();

  if (typeof ethereum !== 'undefined') {
    const block = await ethereum.request({
      method: 'eth_getBlockByNumber',
      params: ['0x' + Number(search.value).toString(16), true],
    });

    const blockNumber = parseInt(block.number);
    const transactions = block.transactions;

    if (block !== null && transactions !== null) {
      element.innerText = blockNumber;

      if (transactions.length) {
        history.innerHTML = '';

        for (let transaction of transactions) {
          createTransactionList(transaction, history);
        }
      } else {
        history.innerHTML = defaultMessage();
      }
    }
  }
}
