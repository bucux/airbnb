

import { create } from 'zustand'

const etatOrigine = {
  num1: 0,
}

export const useStoreNum = create((set) => ({
  ...etatOrigine,
  incNum: (nom) => set((state) => ({ ...state, [nom] : state[nom]  + 1 })),
  setNum: (nom, val) => set((state) => ({ ...state, [nom] : val })),
}))
