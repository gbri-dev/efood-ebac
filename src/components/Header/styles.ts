import styled from 'styled-components'

export const HeaderHome = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 900;
    text-align: center;
  }

  img {
    height: 57.5px;
    margin-bottom: 40px;
  }
`

export const HeaderRestaurante = styled.header`
  max-width: 1024px;
  width: 100%;
  height: 186px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  img {
    height: 57.5px;
    margin-bottom: 0;
  }
`
