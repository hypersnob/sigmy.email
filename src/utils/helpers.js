export function getValue(value = ''){
  return value;
}

export function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    console.log('unsuccessful')
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

export const addHandler = handler => window.addEventListener('beforeunload', handler)
export const removeHandler = handler => window.removeEventListener('beforeunload', handler)

export function getStateFromStorage(initialState, key) {
  try {
    const state = window.localStorage.getItem(key)
    return state ? JSON.parse(state) : initialState;
  } catch (e) {
    console.log('Could not read from storage')
    return initialState;
  }
}

export function saveStateToStorage(state, key) {
  if (Object.entries(state.signature).length === 0) return;
  try {
    window.localStorage.setItem(
      key,
      JSON.stringify(state)
    )
  } catch (e) {
    console.log('Could not access storage')
    return false;
  }
}