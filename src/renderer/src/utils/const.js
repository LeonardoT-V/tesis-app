import { IconHome } from '@tabler/icons-react'
import CreateDatabasesPage from '../pages/CreateDatabasesPage'
import InfoNavSection from '../components/navbar/InfoNavSection'
import { IconCode } from '@tabler/icons-react'
import { IconTableColumn } from '@tabler/icons-react'

export const Theme_colors = {
  primary: [
    '#d9fdff', //0
    '#adf0ff', //1
    '#7de4ff', //2
    '#4dd9ff', //3
    '#26cefe', //4
    '#15b5e5', //5
    '#008cb3', //6
    '#007a9b', //7
    '#00627c', //8
    '#00556d' //9
  ],
  secondary: [
    '#f9f0e6', //0
    '#eed1b3', //1
    '#eed1b3', //2
    '#e9c199', //3
    '#e3b280', //4
    '#dda366', //5
    '#d8934d', //6
    '#d28433', //7
    '#cd741a', //8
    '#c76500' //9
  ],
  bg: [
    '#fbfbfb', // bordes-fondo-light
    '#f8f8f8', //fondo-light
    '#c8c8c8', //fondo-alt-light
    '#282828', // bordes-fondo-dark
    '#262626', //fonto-alt-black
    '#505050' // fondo-black
  ],
  dark: [
    '#fffff',
    '#A6A7AB',
    '#909296',
    '#5C5F66',
    '#373A40',
    '#2C2E33',
    '#25262B',
    '#1A1B1E',
    '#141517',
    '#101113'
  ]
}

export const Nav_Items = [
  { component: CreateDatabasesPage, path: '/home', name: 'Home', icon: IconHome },
  { component: InfoNavSection, path: '/tables', name: 'Tables', icon: IconTableColumn },
  { component: InfoNavSection, path: '/editor', name: 'Editor', icon: IconCode }
]
