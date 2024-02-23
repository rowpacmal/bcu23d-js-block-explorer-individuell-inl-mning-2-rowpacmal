import verifyWalletAddress from './verifyWalletAddress.js';

const inputWarning = (inputElements) => {
  inputElements.forEach((element) => {
    let elementValue;

    if (element.value.startsWith('0x')) {
      elementValue = verifyWalletAddress(element.value);
    } else {
      elementValue = element.value;
    }

    if (!elementValue) {
      if (!element.hasAttribute('style')) {
        element.style.borderColor = 'red';
      }
    } else {
      if (element.hasAttribute('style')) {
        element.removeAttribute('style');
      }
    }
  });
};

export default inputWarning;
