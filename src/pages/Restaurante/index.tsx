import Banner from '../../components/Restaurante/Banner'
import Header from '../../components/Header'
import Prato from '../../components/Restaurante/Prato'
import { Detalhes } from './styles'
import ModalAdd from '../../components/Restaurante/Modal'

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
      <ModalAdd isOpenModal={false} />
    </>
  )
}

export default RestauranteDetalhes
