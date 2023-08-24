import { useEffect, useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import { useTableStore } from '../store/tableStore'

export const useTables = () => {
  const data = useRouteLoaderData('app')
  const [tables, setTables] = useState(data)
  useEffect(() => {
    setTables(data)
  }, [data, tables])

  const displayTableName = Object.keys(tables) || []

  return { displayTableName, tables }
}

export const useFormatTable = () => {
  const [rows, tableName] = useTableStore((state) => [state.rows, state.tableName])
  const [query, setQuery] = useState('')

  useEffect(() => {
    setQuery(formatQuery())
  }, [rows])

  const formatQuery = () => {
    let format = ''
    const finalRow = rows.length - 1
    rows.forEach((item, index) => {
      if (index === 0) format += `CREATE TABLE ${tableName} ( \n`
      if (item.columna === 'id') {
        format += `\tid SERIAL PRIMARY KEY${finalRow !== index ? ',\n' : '\n'}`
        if (index === finalRow) format += `)`
        return
      }
      format += `\t${item.columna} ${item.tipo}${item?.parametro ? `${item.parametro}` : ''}${
        item?.default ? ` DEFAULT ${item.default}` : ''
      }${item?.null ? ' NOT NULL' : ''}${finalRow !== index ? ',\n' : '\n'}`
      console.log({ index, finalRow })
      if (index === finalRow) format += `)`
    })
    return format
  }

  return {
    query,
    formatQuery
  }
}
