import { Input, Radio, RadioGroup, Switch } from '@nextui-org/react'
import { Types_Postgres_Table } from '../../../utils/const'
import { AnimatePresence, motion } from 'framer-motion'

function RadioOfTypeTable({ formik }) {
  return (
    <RadioGroup name="tipo" onChange={formik.handleChange} value={formik.values.tipo}>
      <AnimatePresence>
        <motion.div className="grid grid-cols-2 gap-x-7 gap-y-6" layout>
          {Types_Postgres_Table.map((item) => (
            <div key={item.name} className="flex flex-col gap-unit-md">
              <Radio
                value={item.name}
                classNames={{
                  base: `max-w-[500px] cursor-pointer rounded-small border-2 border-transparent data-[selected=true]:border-violet-400 bg-purple-700/25 hover:scale-105 transition-all p-0`,
                  control: 'hidden p-0 m-0',
                  description: 'hidden p-0 m-0',
                  wrapper: 'hidden p-0 m-0 ',
                  labelWrapper: 'w-full p-0 m-0 '
                }}
              >
                <div className={`h-auto flex gap-unit-sm p-unit-xs items-center text-violet-400`}>
                  <div>
                    <item.icon size={48} />
                  </div>
                  <div className="">
                    <div className="flex gap-1 items-baseline">
                      <h2 className="text-lg font-bold capitalize">{item.name}</h2>
                      <p className="text-xs text-gray-200">{item?.label}</p>
                    </div>
                    <p className="text-gray-400 text-xs">{item.description}</p>
                  </div>
                </div>
              </Radio>
              <AnimatePresence>
                {item.name === formik.values.tipo && (
                  <motion.div
                    className="bg-primary-700/25 border-primary-400 border-2 p-unit-md rounded-small w-full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: '100%'
                    }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="flex flex-col gap-unit-xs">
                      <Input
                        size="sm"
                        labelPlacement="outside-left"
                        placeholder="[Opcional]"
                        label="Valor por defecto"
                        color="primary"
                        variant="faded"
                        name="default"
                        onChange={formik.handleChange}
                        value={formik.values.default}
                      />
                      {item.param && (
                        <Input
                          size="sm"
                          labelPlacement="outside-left"
                          placeholder="[Opcional]"
                          label="Parametro"
                          color="primary"
                          variant="faded"
                          name="parametro"
                          onChange={formik.handleChange}
                          value={formik.values.parametro}
                        />
                      )}

                      <div className="flex gap-unit-sm items-center">
                        <p className="text-tiny text-primary-400 mr-6">Es null</p>
                        <Switch
                          name="null"
                          onChange={formik.handleChange}
                          value={formik.values.null}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </RadioGroup>
  )
}

export default RadioOfTypeTable
