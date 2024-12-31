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

  return (
    <>
      {cardapioDados?.map((prato) => (
        <S.Prato key={prato.id}>
          <img src={prato.foto} alt="prato" />
          <div>
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <p>{prato.porcao}</p>
            <p>{formataPreco(prato.preco)}</p>
          </div>
          <S.Button onClick={() => setIsOpenModal(!isOpenModal)}>
            Adicionar ao carrinho
          </S.Button>
        </S.Prato>
      ))}
      <ModalAdd isOpenModal={isOpenModal} />
    </>
  )
}

export default Prato
