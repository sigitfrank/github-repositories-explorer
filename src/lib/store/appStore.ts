'use client';

import * as zustand from 'zustand';

type AppStore = {
  hasLoaded: boolean;
  setHasLoaded: (hasLoaded: boolean) => void;
};

export const useAppStore = zustand.create<AppStore>((set) => {
  return {
    hasLoaded: false,
    setHasLoaded: (hasLoaded: boolean) => set(() => ({ hasLoaded })),
  };
});
