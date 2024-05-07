import { HeaderHome } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderHome className="theme">
    <img src={logo} alt="EFOOD" />
    <h1>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </h1>
  </HeaderHome>
)

export default Header
