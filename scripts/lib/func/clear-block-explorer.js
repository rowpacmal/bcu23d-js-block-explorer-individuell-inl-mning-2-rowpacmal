import BuildDefaultComponents from '../../components/misc/build-default.js';

const clearBlockExplorer = (
  searchBarInput,
  currentBlockDisplay,
  blockHistoryDisplay
) => {
  searchBarInput.value = '';

  currentBlockDisplay.innerText = BuildDefaultComponents.placeholder;

  blockHistoryDisplay.innerHTML = BuildDefaultComponents.noHistory;
};

export default clearBlockExplorer;
