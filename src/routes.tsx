import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestauranteDetalhes from './pages/Restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestauranteDetalhes />} />
  </Routes>
)

export default Rotas
