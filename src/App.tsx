import { BrowserRouter } from 'react-router-dom'

import StylesGlobal from './styles'
import Rotas from './routes'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <StylesGlobal />
      <Header />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
