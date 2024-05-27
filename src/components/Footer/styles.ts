import styled from 'styled-components'
import { LogoEfood } from '../../styles'

export const LogoFooter = styled(LogoEfood)`
  margin-bottom: 32.5px;
`

export const ContainerFooter = styled.footer`
  height: 298px;
  padding: 40px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Items = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`
export const Item = styled.li`
  margin: 0 8px;

  img {
    height: 28px;
  }
`
