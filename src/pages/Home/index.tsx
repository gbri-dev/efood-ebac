import { Main } from './styles'
import Restaurante from '../../components/Restaurante'

const Home = () => (
  <div className="container">
    <Main>
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
    </Main>
  </div>
)

export default Home
