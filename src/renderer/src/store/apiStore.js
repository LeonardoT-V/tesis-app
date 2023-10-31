import { create } from 'zustand'

export const useApiStore = create((set) => ({
  apiResult: { table: '', result: {} },
  setApiResult: (props) => set(() => ({ apiResult: props })),
  reset: () => () => ({ api: {} })
}))
