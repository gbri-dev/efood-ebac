import { BrowserRouter } from 'react-router-dom'

import StylesGlobal from './styles'
import Rotas from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <StylesGlobal />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
