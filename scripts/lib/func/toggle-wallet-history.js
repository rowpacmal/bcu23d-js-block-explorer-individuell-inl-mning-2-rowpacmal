import BuildDefaultComponents from '../../components/misc/build-default.js';

const toggleWalletHistory = (
  toggleWalletHistoryButton,
  walletHistoryDisplayContainer
) => {
  if (walletHistoryDisplayContainer.style.display === 'none') {
    toggleWalletHistoryButton.innerHTML =
      BuildDefaultComponents.toggleHistory.hide;

    walletHistoryDisplayContainer.style.display = 'block';
  } else {
    toggleWalletHistoryButton.innerHTML =
      BuildDefaultComponents.toggleHistory.show;

    walletHistoryDisplayContainer.style.display = 'none';
  }
};

export default toggleWalletHistory;
