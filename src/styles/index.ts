import styled, { createGlobalStyle } from 'styled-components'
import garfosFacas from '../assets/images/garfoFaca.svg'

export const cores = {
  branca: '#FFFFFF',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3',
  corpo: '#FFF8F2',
  texto: '#E66767',
  buttonText: '#FFEBD9'
}

export const LogoEfood = styled.img`
  height: 57.5px;
`
const StylesGlobal = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Roboto", sans-serif;
  }

  body {
    background-color: ${cores.corpo};
    color: ${cores.texto};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .theme {
    width: 100%;
    background-image: url(${garfosFacas});
  }
`

export default StylesGlobal
