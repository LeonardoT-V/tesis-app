import { useEffect, useState } from 'react'
import { LOCAL_KEY_PROJECT } from '../utils/env'
import { useLocation } from 'react-router-dom'

export const useProject = () => {
  const location = useLocation()
  const [project, setProject] = useState({})

  const getProjectStore = () => {
    const localProject = sessionStorage.getItem(LOCAL_KEY_PROJECT)
    const parseProject = JSON.parse(localProject) || false
    return parseProject
  }

  const setProjectStore = ({ project }) => {
    console.log(project)
    const stringifyProject = JSON.stringify(project)
    sessionStorage.setItem(LOCAL_KEY_PROJECT, stringifyProject)
  }

  const deleteProjectStore = () => {
    sessionStorage.removeItem(LOCAL_KEY_PROJECT)
  }

  useEffect(() => {
    setProject(getProjectStore())
  }, [location])

  return {
    project,
    deleteProjectStore,
    setProjectStore,
    getProjectStore
  }
}
