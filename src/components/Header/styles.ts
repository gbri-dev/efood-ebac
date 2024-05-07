import styled from 'styled-components'

import garfosFacas from '../../assets/images/garfoFaca.svg'

export const HeaderHome = styled.header`
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: url(${garfosFacas});
  padding: 40px;

  h1 {
    font-weight: 900;
  }

  img {
    height: 57.5px;
  }
`
