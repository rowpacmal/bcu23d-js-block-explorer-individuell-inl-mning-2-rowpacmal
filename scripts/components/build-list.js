export function createTransactionList(transaction, history) {
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

export function createBlockList(block, history) {
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
