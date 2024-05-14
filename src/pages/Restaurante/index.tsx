import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Prato from '../../components/Prato'
import { Detalhes } from './styles'

const RestauranteDetalhes = () => {
  return (
    <>
      <Header mostrarCarrinho />
      <Detalhes>
        <Banner />
        <div className="container">
          <Prato />
          <Prato />
          <Prato />
        </div>
      </Detalhes>
    </>
  )
}

export default RestauranteDetalhes
