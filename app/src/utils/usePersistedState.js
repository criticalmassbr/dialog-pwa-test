import { useState, useEffect } from 'react';

/**
 * Persists a state at Local Storage
 * @param {Object} obj
 * @param {String} obj.key
 * @param {Any} obj.initialState
 */
function usePersistedState({ key, initialState }) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
