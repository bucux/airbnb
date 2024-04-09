

import { create } from 'zustand'

const etatOrigine = {
  token: '',
}

export const useStoreStr = create((set) => ({
  ...etatOrigine,
  setStr: (nom, val) => set((state) => ({ ...state, [nom] : val })),
}))
