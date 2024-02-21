import buildBlockList from '../../components/build-block-list.js';
import {
  defaultLatestBlocks,
  defaultLoading,
} from '../../components/build-misc.js';

export async function getBlocks(
  blockList,
  currentBlockDisplay,
  blockHistoryDisplay
) {
  if (currentBlockDisplay.innerText !== defaultLoading()) {
    currentBlockDisplay.innerText = defaultLoading();

    while (blockList.length > 0) {
      blockList.pop();
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

        blockList.push({
          number: block.number,
          hash: block.hash,
        });
      }
    }

    blockHistoryDisplay.innerHTML = '';

    for (let block of blockList) {
      buildBlockList(block, blockHistoryDisplay);
    }

    currentBlockDisplay.innerText = defaultLatestBlocks(blockList);
  } else {
    return null;
  }
}
