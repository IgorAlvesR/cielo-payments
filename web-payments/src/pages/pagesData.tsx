import { routerType } from '../types'
import { Home } from './Home'
import { Metrics } from './Metrics'

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'Home',
  },
  {
    path: 'metrics',
    element: <Metrics />,
    title: 'Métricas',
  },
]

export default pagesData
