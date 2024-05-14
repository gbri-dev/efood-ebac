import { HeaderHome, HeaderRestaurante } from './styles'
import logo from '../../assets/images/logo.svg'

type Props = {
  mostrarCarrinho: boolean
}

const Header = ({ mostrarCarrinho }: Props) => {
  return (
    <HeaderHome className="theme">
      {!mostrarCarrinho ? (
        <>
          <img src={logo} alt="EFOOD" />
          <h1>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </h1>
        </>
      ) : (
        <HeaderRestaurante>
          <h1>Restaurantes</h1>
          <div>
            <img src={logo} alt="EFOOD" />
          </div>
          <p>0 produto(s) no carrinho</p>
        </HeaderRestaurante>
      )}
    </HeaderHome>
  )
}

export default Header
