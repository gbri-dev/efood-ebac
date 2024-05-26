import * as S from './styles'
import bannerImg from '../../assets/images/banner-italia.png'

const Banner = () => (
  <S.Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <S.ConteudoBanner className="container">
      <S.Titulo>Italiana</S.Titulo>
      <S.Nome>La Dolce Vita Trattoria</S.Nome>
    </S.ConteudoBanner>
  </S.Imagem>
)

export default Banner
