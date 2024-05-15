import styled from 'styled-components'
import { cores } from '../../styles'

export const Prato = styled.div`
  position: relative;
  width: 320px;
  height: 338px;
  padding: 8px;
  overflow: hidden;
  background-color: ${cores.texto};
  color: ${cores.buttonText};

  img {
    width: 100%;
  }
  h3 {
    weight: 900;
    line-height: 18.75px;
    font-size: 16px;
  }
  p {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 22px;
  }
`

export const Button = styled.button`
  position: absolute;
  bottom: 8px;
  width: 95%;
  height: 24px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 16.41px;
  border: 1px solid ${cores.buttonText};
  background-color: ${cores.buttonText};
  color: ${cores.texto};
  padding-top: 2px;
  cursor: pointer;
`
