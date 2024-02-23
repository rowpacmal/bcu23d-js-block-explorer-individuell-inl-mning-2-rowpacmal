const buildTransactionList = (transaction, history, address) => {
  const parseValue = parseInt(transaction.value) / Math.pow(10, 18);
  let from = transaction.from;
  let to = transaction.to;

  if (address) {
    if (address.toLowerCase() === from) {
      from = '<i class="fa-solid fa-asterisk"></i> ' + from;
    }
    if (address.toLowerCase() === to) {
      to = '<i class="fa-solid fa-asterisk"></i> ' + to;
    }
  }

  history.innerHTML += `
  <div class="block-container">
    <span>
      <i class="fa-solid fa-right-from-bracket"></i> ${from}
    </span>

    <span>
      <i class="fa-solid fa-right-to-bracket"></i> ${to}
    </span>

    <span>
      <i class="fa-solid fa-receipt"></i>
      <i class="fa-brands fa-ethereum"></i> ${+parseValue} ETH
    </span>
  </div>
  `;
};

export default buildTransactionList;
