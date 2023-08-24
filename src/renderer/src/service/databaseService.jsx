import databaseAPI from '../api/databaseAPI'
import { useProject } from '../hooks/useProject'
import { useDatabaseStore } from '../store/databaseStore'

export const databaseService = () => {
  const [setDatabase] = useDatabaseStore((state) => [state.setDatabase])
  const allAtributesDatabase = async ({ project }) => {
    console.log('service')
    const res = await databaseAPI.allAtributesDatabase({ project })
    setDatabase(res)
    return res
  }
  return { allAtributesDatabase }
}
