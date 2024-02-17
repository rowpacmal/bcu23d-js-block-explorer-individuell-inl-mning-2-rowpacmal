export function defaultBalance() {
  return '0.00';
}

export function defaultPlaceholder() {
  return '---';
}

export function defaultLoading() {
  return 'Loading...';
}

export function defaultMessage() {
  return `
  <div class="block-container">
    <span>
      No history has been recorded...
    </span>
  </div>
  `;
}

export function defaultLatestBlocks(list) {
  return `Latest ${list.length} Blocks`;
}
