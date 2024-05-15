import * as S from './styles'

const Banner = () => {
  const enderecoImg =
    'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg'
  return (
    <S.Banner style={{ backgroundImage: `url(${enderecoImg})` }}>
      <div className="bannerContainer">
        <p>Italiana</p>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </S.Banner>
  )
}

export default Banner
