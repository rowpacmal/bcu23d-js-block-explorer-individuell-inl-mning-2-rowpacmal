import { createBlockList } from '../../components/build-list.js';
import {
  defaultLatestBlocks,
  defaultLoading,
} from '../../components/build-misc.js';

export async function getBlocks(list, element, history) {
  if (element.innerText !== defaultLoading()) {
    element.innerText = defaultLoading();

    while (list.length > 0) {
      list.pop();
    }

    if (typeof ethereum !== 'undefined') {
      const latestBlockNumber = await ethereum.request({
        method: 'eth_blockNumber',
      });

      for (let i = latestBlockNumber; i > latestBlockNumber - 10; i--) {
        const block = await ethereum.request({
          method: 'eth_getBlockByNumber',
          params: ['0x' + Number(i).toString(16), true],
        });

        list.push({
          number: block.number,
          hash: block.hash,
        });
      }
    }

    history.innerHTML = '';

    for (let block of list) {
      createBlockList(block, history);
    }

    element.innerText = defaultLatestBlocks(list);
  }
}
