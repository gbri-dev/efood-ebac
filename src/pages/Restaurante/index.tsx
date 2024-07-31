import Banner from '../../components/Restaurante/Banner'
import Header from '../../components/Header'
import Prato from '../../components/Restaurante/Prato'
import { Detalhes } from './styles'

const RestauranteDetalhes = () => {
  return (
    <>
      <Header mostrarCarrinho tituloConteudo="Restaurantes" />
      <Banner />
      <Detalhes className="container">
        <Prato id={1} />
        <Prato id={1} />
        <Prato id={1} />
        <Prato id={1} />
        <Prato id={1} />
        <Prato id={1} />
      </Detalhes>
    </>
  )
}

export default RestauranteDetalhes
