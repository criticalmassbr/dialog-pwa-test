import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type PersistedState<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(key: string, initialState: T): PersistedState<T> {
  const [state, setState] = useState(() => {
    const persistedTheme = localStorage.getItem(key);

    if (persistedTheme) {
      return JSON.parse(persistedTheme);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
