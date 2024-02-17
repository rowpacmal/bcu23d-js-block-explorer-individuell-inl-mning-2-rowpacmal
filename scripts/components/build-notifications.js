export function notOnSepoliaTestnet(element) {
  element.innerHTML =
    '<p>You are currently connected to a different blockchain than "Sepolia Testnet." To ensure the safety of your funds, it is strongly recommended to switch to the "Sepolia Testnet" before using this application.</p>';
  element.style.opacity = 1;

  setTimeout(() => {
    element.style.opacity = 0;

    setTimeout(() => {
      element.innerHTML = '';
    }, 3000);
  }, 30000);
}