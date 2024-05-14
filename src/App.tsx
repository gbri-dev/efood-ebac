import { BrowserRouter } from 'react-router-dom'

import StylesGlobal from './styles'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <StylesGlobal />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
