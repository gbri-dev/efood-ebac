import * as S from './styles'
import buttonClosed from '../../../assets/images/closed-button.png'
import { useEffect, useState } from 'react'

type Props = {
  isOpenModal: boolean
}

const ModalAdd = ({ isOpenModal }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    setModalOpen(isOpenModal)
  }, [isOpenModal])

  return (
    <S.Modal $isOpen={modalOpen}>
      <S.ModalDetalhes>
        <S.ClosedModal
          src={buttonClosed}
          alt="fechar modal"
          onClick={() => setModalOpen(false)}
        />
        <S.ContainerImagem>
          <S.Imagem
            src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"
            alt="prato"
          />
        </S.ContainerImagem>
        <S.Detalhes>
          <S.Nome>Pizza Marguerita</S.Nome>
          <S.Descricao>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <br />
            <br />
            Serve: de 2 a 3 pessoas
          </S.Descricao>
          <S.ButtonCar>Adicionar ao carrinho - R$60,90</S.ButtonCar>
        </S.Detalhes>
      </S.ModalDetalhes>
      <S.OverlayModal></S.OverlayModal>
    </S.Modal>
  )
}

export default ModalAdd
