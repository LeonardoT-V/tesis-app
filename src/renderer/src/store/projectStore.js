import { create } from 'zustand'

export const useProjectStore = create((set) => ({
  count: 0,
  project: null,
  projectDB: null,
  inc: () => set((state) => ({ count: state.count + 1 })),
  setProject: (newProject) => set(() => ({ project: newProject, projectDB: newProject.db })),
  removeProject: () => set({ project: null, projectDB: null })
}))
