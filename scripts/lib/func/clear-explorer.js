import {
  defaultMessage,
  defaultPlaceholder,
} from '../../components/build-misc.js';

export function clearBlockExplorer(search, element, history) {
  search.value = '';

  element.innerText = defaultPlaceholder();

  history.innerHTML = defaultMessage();
}
