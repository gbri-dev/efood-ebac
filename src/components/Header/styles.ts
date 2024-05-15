import styled from 'styled-components'

export const HeaderHome = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 384px;
  padding-top: 64px;
  font-weight: 900;
  text-align: center;
  h1 {
    font-size: 36px;
    line-height: 42.19px;
  }

  img {
    height: 57.5px;
  }
`

export const HeaderRestaurante = styled(HeaderHome)`
  height: 186px;

  h1 {
    font-size: 18px;
    line-height: 21.09px;
  }

  .carContainer {
    max-width: 1024px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
    @media (max-width: 1024px) {
      flex-direction: row;
      padding: 0 24px;
    }
  }
`
