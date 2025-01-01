import estrela from '../../../assets/images/estrela.svg'
import { Button, Card, CardHead, CardMain } from './styles'

type Props = {
  capa: string
  titulo: string
  classificacao: number
  descricao: string
  id: number
}

const Restaurante = ({ capa, titulo, classificacao, descricao, id }: Props) => (
  <Card>
    <CardHead>
      <img src={capa} alt="produto" />
      <div>
        <h3>{titulo}</h3>
        <span>
          {classificacao} <img src={estrela} alt="classificação" />
        </span>
      </div>
    </CardHead>
    <CardMain>
      <p>
        {descricao.length > 120
          ? `${descricao.substring(0, 120)}...`
          : descricao}
      </p>
      <Button to={`/restaurante/${id}`}>Saiba Mais</Button>
    </CardMain>
  </Card>
)

export default Restaurante
