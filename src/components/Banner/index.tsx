import * as S from './styles'

const Banner = () => {
  const enderecoImg =
    'https://cdn.pixabay.com/photo/2023/04/25/05/28/ai-generated-7949498_1280.jpg'
  return (
    <S.Banner style={{ backgroundImage: `url(${enderecoImg})` }}>
      <div className="container">
        <p>Italiana</p>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </S.Banner>
  )
}

export default Banner
