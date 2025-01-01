import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Restaurante/Banner'
import Prato from '../../components/Restaurante/Prato'
import { RestauranteType } from '../Home'
import { Detalhes } from './styles'

const RestauranteDetalhes = () => {
  const [restaurantes, setRestaurante] = useState<RestauranteType>()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  })

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Header mostrarCarrinho tituloConteudo={restaurantes.titulo} />
      <Banner
        imgUrl={restaurantes.capa}
        tipo={restaurantes.tipo}
        nome={restaurantes.titulo}
      />
      <Detalhes className="container">
        <Prato id={restaurantes.id} />
      </Detalhes>
    </>
  )
}

export default RestauranteDetalhes
