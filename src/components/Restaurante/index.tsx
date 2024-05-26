import { Card, CardHead, CardMain, Button } from './styles'
import estrela from '../../assets/images/estrela.svg'
import restauranteImg from '../../assets/images/restaurante-italiano.png'
const Restaurante = () => (
  <Card>
    <CardHead>
      <img src={restauranteImg} alt="produto" />
      <div>
        <h3>Nome do restaurante</h3>
        <span>
          4.9 <img src={estrela} alt="classificação" />
        </span>
      </div>
    </CardHead>
    <CardMain>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam illo
        distinctio sequi, laudantium unde aperiam praesentium a? Eaque vero
        facere pariatur perspiciatis nihil.
      </p>
      <Button to="/restaurante/1">Saiba Mais</Button>
    </CardMain>
  </Card>
)

export default Restaurante
