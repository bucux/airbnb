


import { create } from 'zustand'

const etatOrigine = {
  isBool: false,
}

export const useStoreBool = create((set) => ({
  ...etatOrigine,
  setBool: (nom, bool) => set((state) => ({ ...state, [nom] : bool })),
  switchBool: (nom) => set((state) => ({ ...state, [nom] : !state[nom] })),
}))
