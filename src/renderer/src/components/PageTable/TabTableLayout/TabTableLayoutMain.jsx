import { Tab, Tabs } from '@nextui-org/react'
import { IconBraces, IconRouter } from '@tabler/icons-react'
import TabTableApiPreview from './TabTableApiPreview'
import TabTableJsonPreview from './TabTableJsonPreview'

function TabTableLayoutMain() {
  return (
    <div className="flex w-full lg:w-80 flex-col bg-content1 p-unit-md rounded-small gap-unit-md">
      <Tabs
        aria-label="Dynamic tabs"
        radius="sm"
        color="primary"
        variant="bordered"
        fullWidth
        classNames={{ panel: 'm-0 p-0' }}
      >
        <Tab
          key="hola 1"
          title={
            <div className="flex items-center space-x-2">
              <IconRouter stroke={1.5} size={20} />
              <span className="text-base">Api</span>
            </div>
          }
        >
          <TabTableApiPreview />
        </Tab>
        <Tab
          key="hola2"
          title={
            <div className="flex items-center space-x-2">
              <IconBraces stroke={1.5} size={20} />
              <span className="text-base">Json</span>
            </div>
          }
        >
          <TabTableJsonPreview />
        </Tab>
      </Tabs>
    </div>
  )
}

export default TabTableLayoutMain
