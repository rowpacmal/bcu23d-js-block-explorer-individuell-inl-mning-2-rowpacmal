import { DefaultToggleLedger } from '../../components/build-misc.js';

const toggleLedger = (button, ledger) => {
  if (ledger.style.display === 'none') {
    button.innerHTML = DefaultToggleLedger.hide;

    ledger.style.display = 'block';
  } else {
    button.innerHTML = DefaultToggleLedger.show;

    ledger.style.display = 'none';
  }
};

export default toggleLedger;
