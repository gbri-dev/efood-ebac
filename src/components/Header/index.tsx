import { HeaderHome } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderHome>
    <img src={logo} alt="EFOOD" />
    <h1>Viva experiências gastronômicasno conforto da sua casa</h1>
  </HeaderHome>
)

export default Header
