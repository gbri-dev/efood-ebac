import { HeaderHome, HeaderRestaurante } from './styles'
import logo from '../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarCarrinho: boolean
}

const Header = ({ mostrarCarrinho }: Props) => {
  const navigate = useNavigate()

  return (
    <>
      {!mostrarCarrinho ? (
        <HeaderHome className="theme">
          <img src={logo} alt="EFOOD" />
          <h1>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </h1>
        </HeaderHome>
      ) : (
        <HeaderRestaurante className="theme">
          <div className="carContainer">
            <h1>Restaurantes</h1>
            <div>
              <img src={logo} alt="EFOOD" onClick={() => navigate('/')} />
            </div>
            <p>0 produto(s) no carrinho</p>
          </div>
        </HeaderRestaurante>
      )}
    </>
  )
}

export default Header
