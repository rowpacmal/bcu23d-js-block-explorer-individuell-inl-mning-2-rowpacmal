export async function sendFunds(sender, amount, receiver) {
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

        return response;
      } catch (error) {
        throw error;
      }
    }
  }
}
