import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestauranteDetalhes from './pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Restaurante" element={<RestauranteDetalhes />} />
  </Routes>
)

export default Rotas
