import { create } from 'zustand'

export const useTableStore = create((set) => ({
  tableName: '',
  setTableName: (name) => set(() => ({ tableName: name })),
  field: null,
  setField: (fields) => set(() => ({ field: fields })),
  rows: false,
  setRows: (rows) => set(() => ({ loading: rows }))
}))
