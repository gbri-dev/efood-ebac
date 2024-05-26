import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Prato from '../../components/Prato'
import { Detalhes } from './styles'

const RestauranteDetalhes = () => {
  return (
    <>
      <Header mostrarCarrinho tituloConteudo="Restaurantes" />
      <Banner />
      <Detalhes className="container">
        <Prato />
        <Prato />
        <Prato />
        <Prato />
        <Prato />
        <Prato />
      </Detalhes>
    </>
  )
}

export default RestauranteDetalhes
