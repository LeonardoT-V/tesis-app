import { IconColumns3 } from '@tabler/icons-react'
import { AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NavLinks({ to, name, icon, children }) {
  const defaultVariant =
    'transition-all px-unit-md py-unit-xs rounded-small flex gap-unit-sm capitalize'
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${defaultVariant}  bg-primary-500 text-background`
            : `${defaultVariant} hover:bg-primary-700/25 hover:scale-105 hover:text-primary-400 text-gray-400`
        }
      >
        {icon && icon}
        <p>{name}</p>
      </NavLink>
      <AnimatePresence>
        {children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'fit-content'
            }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-4  flex-col flex gap-1 capitalize max-h-48 overflow-auto"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function SubNavLinks({ links }) {
  const defaultVariant =
    'transition-all px-unit-md py-1 rounded-small flex gap-unit-sm items-center'
  if (links.length >= 0) {
    return (
      <>
        {links.map((table_name) => (
          <NavLink
            key={table_name}
            to={`/app/tables/${table_name}`}
            className={({ isActive }) =>
              isActive
                ? `${defaultVariant} bg-primary-700/25 text-gray-200`
                : `${defaultVariant} text-gray-400 hover:bg-primary-700/25`
            }
          >
            <IconColumns3 size={20} className="stroke-primary-400" stroke={1.5} />
            {table_name}
          </NavLink>
        ))}
      </>
    )
  }
}
