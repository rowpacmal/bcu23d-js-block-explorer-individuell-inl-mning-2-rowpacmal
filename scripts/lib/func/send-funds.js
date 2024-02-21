export async function sendFunds(
  senderWalletAddress,
  transactionAmount,
  receiverWalletAddress
) {
  if (typeof ethereum !== 'undefined') {
    if (
      senderWalletAddress.value &&
      transactionAmount.value &&
      receiverWalletAddress.value
    ) {
      try {
        const funds = parseFloat(transactionAmount.value) * Math.pow(10, 18);

        const response = await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              to: receiverWalletAddress.value,
              from: senderWalletAddress.value,
              value: Number(funds).toString(16),
              gas: Number(21000).toString(16),
              gasPrice: Number(2502020).toString(16),
            },
          ],
        });

        return response;
      } catch (error) {
        throw error;
      }
    } else {
      return null;
    }
  }
}
