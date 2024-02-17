export function appControl() {
  const checkBalanceButton = document.querySelector('#check-balance');
  const balanceDisplay = document.querySelector('#balance');
  const historyDisplay = document.querySelector('#display-history');
  const senderAddressInput = document.querySelector('#sender-address');
  const transactionAmountInput = document.querySelector('#amount');
  const receiverAddressInput = document.querySelector('#receiver-address');
  const sendTransactionButton = document.querySelector('#send-funds');
  const searchBarInput = document.querySelector('#search-bar');
  const searchButton = document.querySelector('#search');
  const currentBlock = document.querySelector('#block-number');
  const checkBlockButton = document.querySelector('#check-block');
  const clearBlockButton = document.querySelector('#clear-block');
  const blockList = [];

  checkBalanceButton.addEventListener('click', () => {
    checkWallet(senderAddressInput, balanceDisplay);
  });
  sendTransactionButton.addEventListener('click', () => {
    sendFunds(senderAddressInput, transactionAmountInput, receiverAddressInput);
  });
  searchButton.addEventListener('click', () => {
    searchBlock(searchBarInput, currentBlock, historyDisplay);
  });
  checkBlockButton.addEventListener('click', () => {
    getBlocks(blockList, currentBlock, historyDisplay);
  });
  clearBlockButton.addEventListener('click', () => {
    clearBlockExplorer(searchBarInput, currentBlock, historyDisplay);
  });
}

async function checkWallet(address, element) {
  if (typeof ethereum !== 'undefined') {
    if (address.value) {
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [address.value, 'latest'],
      });

      const parseBalance = parseInt(balance) / Math.pow(10, 18);

      element.innerText = parseBalance.toFixed(4);
    } else {
      element.innerText = '0.00';
    }
  }
}

async function sendFunds(sender, amount, receiver) {
  if (typeof ethereum !== 'undefined') {
    if (sender.value && amount.value && receiver.value) {
      try {
        const fund = parseFloat(amount.value) * Math.pow(10, 18);

        const response = await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              to: receiver.value,
              from: sender.value,
              value: Number(fund).toString(16),
              gas: Number(21000).toString(16),
              gasPrice: Number(2502020).toString(16),
            },
          ],
        });

        console.info(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
}

async function searchBlock(search, element, history) {
  element.innerText = 'Loading...';

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
        displayHistory(transactions, history);
      } else {
        history.innerHTML = `
      <div class="block-container">
        <span>
          No history has been recorded yet...
        </span>
      </div>
      `;
      }
    }
  }
}

function displayHistory(transactions, history) {
  history.innerHTML = '';

  for (let transaction of transactions) {
    createTransactionList(transaction, history);
  }
}

function createTransactionList(transaction, history) {
  const parseValue = parseInt(transaction.value) / Math.pow(10, 18);

  history.innerHTML += `
  <div class="block-container">
    <span>
      <i class="fa-solid fa-right-from-bracket"></i> ${transaction.from}
    </span>

    <span>
      <i class="fa-solid fa-right-to-bracket"></i> ${transaction.to}
    </span>

    <span>
      <i class="fa-solid fa-receipt"></i>
      <i class="fa-brands fa-ethereum"></i> ${+parseValue} ETH
    </span>
  </div>
  `;
}

async function getBlocks(list, element, history) {
  if (element.innerText !== 'Loading...') {
    element.innerText = 'Loading...';

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

    element.innerText = `Latest ${list.length} Blocks`;
  }
}

function createBlockList(block, history) {
  history.innerHTML += `
  <div class="block-container">
    <span>
    <i class="fa-solid fa-cube"></i> ${parseInt(block.number)}
    </span>

    <span>
      <i class="fa-solid fa-hashtag"></i> ${block.hash}
    </span>
  </div>
  `;
}

function clearBlockExplorer(search, element, history) {
  search.value = '';

  element.innerText = '---';

  history.innerHTML = `
  <div class="block-container">
    <span>
      No history has been recorded yet...
    </span>
  </div>
  `;
}
