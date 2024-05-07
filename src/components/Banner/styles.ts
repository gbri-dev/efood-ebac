import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: ${cores.branca};
    position: relative;
    z-index: 1;

    font-size: 32px;
    line-height: 37.5px;

    p {
      font-weight: 100;
    }

    h1 {
      font-weight: 900;
    }
  }
`
