const buildBlockList = (block, blockHistoryDisplay) => {
  blockHistoryDisplay.innerHTML += `
  <div class="block-container">
    <span>
    <i class="fa-solid fa-cube"></i> ${parseInt(block.number)}
    </span>

    <span>
      <i class="fa-solid fa-hashtag"></i> ${block.hash}
    </span>
  </div>
  `;
};

export default buildBlockList;
