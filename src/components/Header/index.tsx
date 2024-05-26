import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'
import { LogoEfood } from '../../styles'

type Props = {
  mostrarCarrinho: boolean
  tituloConteudo: string
}

const Header = ({ mostrarCarrinho, tituloConteudo }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="theme">
      <div className="container">
        {!mostrarCarrinho ? (
          <S.Header $primary>
            <LogoEfood src={logo} alt="EFOOD" />
            <S.TituloHead $primary>{tituloConteudo}</S.TituloHead>
          </S.Header>
        ) : (
          <S.Header>
            <S.TituloHead>{tituloConteudo}</S.TituloHead>
            <div>
              <LogoEfood src={logo} alt="EFOOD" onClick={() => navigate('/')} />
            </div>
            <p>0 produto(s) no carrinho</p>
          </S.Header>
        )}
      </div>
    </div>
  )
}

export default Header
