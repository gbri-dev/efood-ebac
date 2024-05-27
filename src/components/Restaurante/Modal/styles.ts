import styled from 'styled-components'
import { cores } from '../../../styles'

export const Nome = styled.h3`
  font-weight: 900;
  font-size: 18px;
  line-weight: 21.09px;
  color: ${cores.branca};
`

export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-weight: 22px;
  color: ${cores.branca};
`

export const ButtonCar = styled.button`
  border: none;
  padding: 4px 0;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  max-width: 218px;
  color: ${cores.texto};

  &:hover {
    cursor: pointer;
    background: #ffffff;
  }
`

export const Modal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  .visable {
    display: flex;
  }
`

export const ModalDetalhes = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  height: 344px;
  padding: 32px;
  background-color: #e66767;
  display: flex;
  gap: 24px;
`

export const ContainerImagem = styled.div`
  height: 280px;
`

export const Imagem = styled.img`
  max-width: 280px;
  height: 280px;
  object-fit: cover;
`

export const Detalhes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const ClosedModal = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin: 8px;
`
export const OverlayModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 1;
  transition: opacity 0.5s ease;
`
