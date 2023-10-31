import apiAPI from '../api/apiApi'
import { useApiStore } from '../store/apiStore'

export const apiService = () => {
  const setApiResult = useApiStore((state) => state.setApiResult)

  const executeApiRestQuery = async ({ table, queryId, method }) => {
    const response = await apiAPI.executeApiRestQuery({ table, queryId, method })
    setApiResult({ table, result: response })
    return
  }

  return {
    executeApiRestQuery
  }
}
