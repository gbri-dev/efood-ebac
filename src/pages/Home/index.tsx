import { Main } from './styles'
import Restaurante from '../../components/Restaurante/Card'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

export type RestauranteType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurante] = useState<RestauranteType[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  })

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header
        mostrarCarrinho={false}
        tituloConteudo="Viva experiências gastronômicas no conforto da sua casa"
      />
      <Main className="container">
        {restaurantes.map((restauranteApi) => (
          <Restaurante
            key={restauranteApi.id}
            capa={restauranteApi.capa}
            titulo={restauranteApi.titulo}
            descricao={restauranteApi.descricao}
            classificacao={restauranteApi.avaliacao}
            id={restauranteApi.id}
          />
        ))}
      </Main>
    </>
  )
}

export default Home
