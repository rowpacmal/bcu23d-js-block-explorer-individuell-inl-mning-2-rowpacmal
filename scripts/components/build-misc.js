export const defaultBalance = () => {
  return '0.00';
};

export const defaultPlaceholder = () => {
  return '---';
};

export const defaultLoading = () => {
  return 'Loading...';
};

export const defaultMessage = () => {
  return `
  <div class="block-container">
    <span>
      No history has been recorded...
    </span>
  </div>
  `;
};

export const defaultLatestBlocks = (list) => {
  return `Latest ${list.length} Blocks`;
};

export const DefaultToggleLedger = {
  show: 'Show <i class="fa-solid fa-caret-down"></i>',
  hide: 'Hide <i class="fa-solid fa-caret-up"></i>',
};
