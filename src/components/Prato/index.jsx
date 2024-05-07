import * as S from './styles'

const Prato = () => {
  return (
    <S.Prato>
      <img src="https://placeholder.com/320x180" alt="prato" />
      <div>
        <h3>Pizza Marguerita</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          aliquam.
        </p>
      </div>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Prato>
  )
}

export default Prato
