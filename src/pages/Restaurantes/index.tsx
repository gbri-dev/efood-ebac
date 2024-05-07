import Banner from '../../components/Banner'
import Prato from '../../components/Prato'
import { Detalhes } from './styles'

const RestauranteDetalhes = () => (
  <Detalhes>
    <Banner />
    <div className="container">
      <Prato />
      <Prato />
      <Prato />
    </div>
  </Detalhes>
)

export default RestauranteDetalhes
