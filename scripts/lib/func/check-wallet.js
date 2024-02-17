import { defaultBalance } from '../../components/build-misc.js';

export async function checkWallet(address, element) {
  if (typeof ethereum !== 'undefined') {
    if (address.value) {
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [address.value, 'latest'],
      });

      const parseBalance = parseInt(balance) / Math.pow(10, 18);

      element.innerText = parseBalance.toFixed(4);
    } else {
      element.innerText = defaultBalance();
    }
  }
}
