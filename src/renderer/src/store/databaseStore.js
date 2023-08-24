import { create } from 'zustand'

export const useDatabaseStore = create((set) => ({
  database: {},
  setDatabase: (props) => set(() => ({ tableName: props })),

  columnFormat: () => (state) => ({
    column: Object.keys(state.database)
  })
}))
