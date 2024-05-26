import styled from 'styled-components'

export const Header = styled.header<{ $primary?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.$primary ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.$primary ? '384px' : '186px')};
  padding: 40px 0;
  font-weight: 900;
  text-align: center;
`
export const TituloHead = styled.h1<{ $primary?: boolean }>`
  max-width: 539px;
  font-weight: 900;
  font-size: ${(props) => (props.$primary ? '36px' : '18px')};
  line-height: 42.19px;
  text-align: center;
`
