import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../../styles'

export const Card = styled.div`
  max-width: 472px;
  overflow: hidden;
  height: 398px;
  border: solid 1px ${cores.texto};
`

export const CardHead = styled.div`
  img {
    width: 100%;
    height: 240px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    padding: 0 8px;
    span {
      display: flex;
      align-items: center;
      img {
        margin: 0px 4px;
        height: 21px;
      }
    }
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 16px;
  }
`

export const CardMain = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 16px;
`

export const Button = styled(Link)`
  max-width: 112px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  text-align: center;
  line-height: 16.41px;
  font-weight: bold;
  font-size: 14px;
  padding: 8px 0;
  border: none;
  color: ${cores.buttonText};
  background-color: ${cores.texto};
  cursor: pointer;
`
