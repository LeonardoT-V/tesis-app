import React from 'react'
import WithNavSection from './WithNavSection'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <WithNavSection>
      <Outlet />
    </WithNavSection>
  )
}

export default Layout
