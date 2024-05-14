import { Main } from './styles'
import Restaurante from '../../components/Restaurante'
import Header from '../../components/Header'

const Home = () => (
  <>
    <Header mostrarCarrinho={false} />
    <div className="container">
      <Main>
        <Restaurante />
        <Restaurante />
        <Restaurante />
        <Restaurante />
      </Main>
    </div>
  </>
)

export default Home
