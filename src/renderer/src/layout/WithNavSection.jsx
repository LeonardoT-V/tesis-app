import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/navbar/Navbar'

function WithNavSection() {
  return (
    <>
      <Navbar />

      <div className="sm:ml-64 min-h-screen ">
        <div className="px-3 py-4 min-h-screen flex flex-col gap-y-unit-md">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default WithNavSection
