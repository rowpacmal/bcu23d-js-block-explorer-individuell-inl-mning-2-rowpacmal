const blocks = [];

if (typeof ethereum !== 'undefined') {
  const latestBlockNumber = await ethereum.request({
    method: 'eth_blockNumber',
  });

  console.log(parseInt(latestBlockNumber));

  for (let i = latestBlockNumber; i > latestBlockNumber - 10; i--) {
    const block = await ethereum.request({
      method: 'eth_getBlockByNumber',
      params: ['0x' + Number(i).toString(16), true],
    });

    console.log(parseInt(block.number));

    blocks.push({
      number: block.number,
      hash: block.hash,
    });
  }

  console.log(blocks);

  const lastEntry = blocks.at(-1).number;

  setTimeout(async () => {
    for (let i = lastEntry - 1; i > lastEntry - 11; i--) {
      const block = await ethereum.request({
        method: 'eth_getBlockByNumber',
        params: ['0x' + Number(i).toString(16), true],
      });

      console.log(parseInt(block.number));

      blocks.push({
        number: block.number,
        hash: block.hash,
      });
    }

    console.log(blocks);
  }, 5000);
}
