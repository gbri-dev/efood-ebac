import { Main } from './styles'
import Restaurante from '../../components/Restaurante/Card'
import Header from '../../components/Header'

const Home = () => (
  <>
    <Header
      mostrarCarrinho={false}
      tituloConteudo="Viva experiências gastronômicas no conforto da sua casa"
    />
    <Main className="container">
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
    </Main>
  </>
)

export default Home
