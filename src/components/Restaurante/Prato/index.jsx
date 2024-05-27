import * as S from './styles'

const Prato = () => {
  return (
    <>
    <S.Prato>
      <img
        src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"
        alt="prato"
      />
      <div>
        <h3>Pizza Marguerita</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          aliquam.
        </p>
      </div>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Prato>
    </>
  )
}

export default Prato
