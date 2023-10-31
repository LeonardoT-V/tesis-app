import { Switch } from '@nextui-org/react'
import { motion } from 'framer-motion'

function HomePage() {
  return (
    <section>
      <section className="flex flex-col bg-content1 p-unit-md rounded-small w-[500px]">
        <header className="flex justify-between">
          <h2 className="text-4xl font-bold text-warning-600">API</h2>
          <Switch size="lg" onClick={() => window.express.openExpressServer()} />
        </header>
        <div className="flex mr-auto text-xl items-center align-middle mt-2 gap-2">
          <p className="text-white ">Estado:</p>
          <div className="flex items-center gap-1">
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2]
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                repeat: Infinity
              }}
              className="text-transparent bg-success-600 rounded-full w-4 h-4"
            ></motion.div>
            <span className="text-success-600 font-bold">Activo</span>
          </div>
        </div>
        <p className="text-sm text-gray-400">
          Puede acceder a los datos en su navegador usando <span>localhost:3000/api/</span>{' '}
        </p>
      </section>

      <div>hhpñlssssssqqwe</div>
    </section>
  )
}

export default HomePage
