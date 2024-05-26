import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 32px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const ConteudoBanner = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${cores.branca};
  line-height: 37.5px;
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 100;
`

export const Nome = styled.h3`
  font-weight: 900;
  font-size: 32px;
`
