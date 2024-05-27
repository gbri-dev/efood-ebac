import logo from '../../assets/images/logo.svg'
import facebookIcon from '../../assets/images/facebook.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import instagramIcon from '../../assets/images/instagram.svg'

import { ContainerFooter, LogoFooter, Items, Item } from './styles'

const Footer = () => (
  <ContainerFooter className="theme">
    <LogoFooter src={logo} alt="EFOOD" />
    <Items>
      <Item>
        <a href="#">
          <img src={instagramIcon} alt="instagram" />
        </a>
      </Item>
      <Item>
        <a href="#">
          <img src={facebookIcon} alt="facebook" />
        </a>
      </Item>
      <Item>
        <a href="#">
          <img src={twitterIcon} alt="twitter" />
        </a>
      </Item>
    </Items>
    <small>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </small>
  </ContainerFooter>
)

export default Footer
