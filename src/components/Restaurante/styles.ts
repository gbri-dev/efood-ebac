import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  height: 398px;
  border: solid 1px ${cores.texto};
`

export const CardHead = styled.div`
  font-weight: 700;
  font-size: 18px;

  img {
    width: 100%;
    height: 240px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    padding: 2px 8px;

    span {
      display: flex;
      align-items: center;
      img {
        margin: 0px 4px;
        height: 21px;
      }
    }
  }
`

export const CardMain = styled.div`
  padding: 8px;

  p {
    padding-bottom: 8px;
  }
`

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  color: ${cores.buttonText};
  background-color: ${cores.texto};
  cursor: pointer;
`
