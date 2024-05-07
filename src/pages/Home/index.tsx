import { Main } from './styles'
import Restaurantes from '../../components/Restaurantes'

const Home = () => (
  <div className="container">
    <Main>
      <Restaurantes />
      <Restaurantes />
      <Restaurantes />
      <Restaurantes />
    </Main>
  </div>
)

export default Home
