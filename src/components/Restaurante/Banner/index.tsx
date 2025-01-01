import * as S from './styles'

type Props = {
  imgUrl: string
  tipo: string
  nome: string
}

const Banner = ({ imgUrl, tipo, nome }: Props) => {
  return (
    <S.Imagem style={{ backgroundImage: `url(${imgUrl})` }}>
      <S.ConteudoBanner className="container">
        <S.Titulo>{tipo}</S.Titulo>
        <S.Nome>{nome}</S.Nome>
      </S.ConteudoBanner>
    </S.Imagem>
  )
}

export default Banner
