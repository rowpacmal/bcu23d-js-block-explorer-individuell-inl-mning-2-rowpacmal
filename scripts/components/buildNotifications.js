const fadeEffect = (element, timer) => {
  setTimeout(() => {
    element.style.opacity = 0;

    setTimeout(() => {
      element.remove();
    }, 3000);
  }, timer);
};

const buildNotification = (parentContainer, message, timer = 3000) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(message));

  parentContainer.insertAdjacentElement('afterbegin', paragraph);

  fadeEffect(paragraph, timer);
};

const Notifications = {
  notOnSepoliaTestnet: (parentContainer) => {
    const message =
      'You are currently connected to a different blockchain than "Sepolia Testnet." To ensure the safety of your funds, it is strongly recommended to switch to the "Sepolia Testnet" before using this application.';

    buildNotification(parentContainer, message, 30000);
  },

  notAWalletAddress: (parentContainer) => {
    const message = 'Please enter a valid wallet address.';

    buildNotification(parentContainer, message);
  },

  notAValidTransaction: (parentContainer) => {
    const message =
      'In order to send a transaction you need to enter a valid sender address, transaction amount and a receiver address.';

    buildNotification(parentContainer, message);
  },

  notAValidSearch: (parentContainer) => {
    const message = 'Please enter a valid block number.';

    buildNotification(parentContainer, message);
  },
};

export default Notifications;
