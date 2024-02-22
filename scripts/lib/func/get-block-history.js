import buildBlockList from '../../components/build-block-list.js';
import BuildDefaultComponents from '../../components/misc/build-default.js';
import clearDisplay from './clear-display.js';

const getBlockHistory = async (
  blockList,
  currentBlockDisplay,
  blockHistoryDisplay
) => {
  if (currentBlockDisplay.innerText !== BuildDefaultComponents.loading) {
    blockHistoryDisplay.innerHTML = BuildDefaultComponents.noHistory;
    currentBlockDisplay.innerText = BuildDefaultComponents.loading;

    while (blockList.length > 0) {
      blockList.pop();
    }

    const latestBlockNumber = await ethereum.request({
      method: 'eth_blockNumber',
    });

    const count = 5;

    for (let i = latestBlockNumber; i > latestBlockNumber - count; i--) {
      const block = await ethereum.request({
        method: 'eth_getBlockByNumber',
        params: ['0x' + Number(i).toString(16), true],
      });

      blockList.push({
        number: block.number,
        hash: block.hash,
      });
    }

    clearDisplay(blockHistoryDisplay);

    for (let block of blockList) {
      buildBlockList(block, blockHistoryDisplay);
    }

    currentBlockDisplay.innerText =
      BuildDefaultComponents.latestBlocks(blockList);
  }
};

export default getBlockHistory;
