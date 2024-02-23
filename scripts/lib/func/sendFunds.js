import verifyWalletAddress from './verifyWalletAddress.js';
import Notifications from '../../components/buildNotifications.js';
import inputWarning from './inputWarning.js';

const sendFunds = async (
  notificationsContainer,
  senderWalletAddress,
  transactionAmount,
  receiverWalletAddress
) => {
  inputWarning([senderWalletAddress, transactionAmount, receiverWalletAddress]);

  if (
    verifyWalletAddress(senderWalletAddress.value) &&
    transactionAmount.value &&
    verifyWalletAddress(receiverWalletAddress.value)
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
    Notifications.notAValidTransaction(notificationsContainer);
  }
};

export default sendFunds;
