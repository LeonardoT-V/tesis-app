import { Divider } from '@nextui-org/react'
import { NavLinks, SubNavLinks } from './NavLinks'
import { ICON_APP_PATH, NAME_APP, VERSION_APP } from '../../../utils/env'
import NavbarFooter from './NavbarFooter'
import { NavLinks_Routes } from '../../../utils/const'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTables } from '../../../hooks/useTables'

function Navbar() {
  const { displayTableName: tables } = useTables()
  const location = useLocation()

  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <section className="h-full px-3 py-4 flex flex-col gap-unit-md ">
        <header className="flex justify-center items-center gap-unit-xs mt-4 py-4 bg-content1 rounded-small">
          <img src={ICON_APP_PATH} alt="logo app" className="h-12 w-12" />
          <h3 className="text-3xl font-display text-white">
            {NAME_APP} <span className="text-tiny text-gray-400 font-sans">{VERSION_APP}</span>
          </h3>
        </header>

        <motion.div
          className="flex flex-col gap-1 grow"
          layout
          transition={{
            opacity: { ease: 'linear' },
            layout: { duration: 0.3 }
          }}
        >
          {NavLinks_Routes.map((link) => (
            <NavLinks
              to={link.path}
              name={link.name}
              icon={<link.icon stroke={1.5} />}
              key={link.name}
            >
              {link.isSub && location.pathname.includes('tables') && <SubNavLinks links={tables} />}
            </NavLinks>
          ))}
        </motion.div>
        <Divider />
        <NavbarFooter />
      </section>
    </aside>
  )
}

export default Navbar
