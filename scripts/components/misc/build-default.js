const BuildDefaultComponents = {
  balance: '0.00',

  placeholder: '---',

  loading: 'Loading...',

  noHistory: `
    <div class="block-container">
      <span>
        No history has been recorded...
      </span>
    </div>
  `,

  latestBlocks: (blockList) => {
    return `Latest ${blockList.length} Blocks`;
  },

  toggleHistory: {
    show: 'Show <i class="fa-solid fa-caret-down"></i>',

    hide: 'Hide <i class="fa-solid fa-caret-up"></i>',
  },
};

export default BuildDefaultComponents;
