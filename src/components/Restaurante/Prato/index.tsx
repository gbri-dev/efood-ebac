import { useEffect, useState } from 'react'
import ModalAdd from '../Modal'
import * as S from './styles'

type Props = {
  id: number
}

type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Prato = ({ id }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [cardapioDados, setCardapio] = useState<Cardapio[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  })

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  console.log(cardapioDados)
  return (
    <>
      <S.Prato>
        <img
          src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"
          alt="prato"
        />
        <div>
          <h3>Pizza</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            aliquam.
          </p>
        </div>
        <S.Button onClick={() => setIsOpenModal(!isOpenModal)}>
          Adicionar ao carrinho
        </S.Button>
      </S.Prato>
      <ModalAdd isOpenModal={isOpenModal} />
    </>
  )
}

export default Prato
