import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding: 83.33px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
