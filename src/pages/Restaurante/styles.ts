import styled from 'styled-components'

export const Detalhes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 40px 0;
  @media (max-width: 1024px) {
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
`
