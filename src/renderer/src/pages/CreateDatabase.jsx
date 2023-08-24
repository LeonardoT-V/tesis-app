import FormToCreateDb from '../components/PageCreateDatabase/FormToCreateDb'
import MyDatabaseCreated from '../components/PageCreateDatabase/MyDatabaseCreated'
import { ICON_APP_PATH, NAME_APP } from '../utils/env'
import { Divider } from '@nextui-org/react'

function CreateDatabase() {
  return (
    <div className="h-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-unit-sm md:gap-unit-md p-unit-md">
      <div className="bg-content1 px-unit-lg py-unit-lg rounded-lg flex flex-col gap-unit-md w-full sm:w-3/4 md:w-2/4 lg:w-1/3 h-[500px] md:h-4/6  2xl:h-2/6 2xl:w-2/6">
        <h3 className="text-3xl text-center text-warning-600">Tus Bases de datos</h3>
        <MyDatabaseCreated />
        <footer className="flex gap-unit-md items-center justify-center">
          <div className="flex items-center gap-4 font-bold">
            <img src={ICON_APP_PATH} alt="logo app" className="w-14 h-14" />
            <p className="text-2xl font-display text-white">{NAME_APP}</p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex flex-col text-xs text-default-500 gap-1">
            <p>Ider Leonardo Toro Vega</p>
            <p>Carranza delgado Anthony</p>
          </div>
        </footer>
      </div>

      <div className="bg-content1 p-unit-xl rounded-lg flex flex-col gap-unit-lg md:w-2/4 lg:w-2/6">
        <div className=" text-5xl text-center">
          <h1 className="text-3xl">Conectate a una base de datos</h1>
          <h2 className="font-bold  text-primary-500 text-5xl ">PostgreSQL</h2>
        </div>
        <FormToCreateDb />
      </div>
    </div>
  )
}

export default CreateDatabase
