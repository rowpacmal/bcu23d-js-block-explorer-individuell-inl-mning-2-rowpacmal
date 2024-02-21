import BuildDefaultComponents from '../../components/misc/build-default.js';

const toggleWalletHistory = (button, ledger) => {
  if (ledger.style.display === 'none') {
    button.innerHTML = BuildDefaultComponents.toggleHistory.hide;

    ledger.style.display = 'block';
  } else {
    button.innerHTML = BuildDefaultComponents.toggleHistory.show;

    ledger.style.display = 'none';
  }
};

export default toggleWalletHistory;
