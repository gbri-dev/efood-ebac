import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3',
  corpo: '#FFF8F2',
  texto: '#E66767',
  buttonText: '#FFEBD9'
}

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
`

export default StylesGlobal
