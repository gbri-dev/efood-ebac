import logo from '../../assets/images/logo.svg'
import facebookIcon from '../../assets/images/facebook.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import instagramIcon from '../../assets/images/instagram.svg'

import { FooterS, RedesS } from './styles'
import { LogoEfood } from '../../styles'

const Footer = () => (
  <FooterS className="theme">
    <LogoEfood src={logo} alt="EFOOD" className="mb" />
    <RedesS>
      <li>
        <a href="#">
          <img src={instagramIcon} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebookIcon} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twitterIcon} alt="twitter" />
        </a>
      </li>
    </RedesS>
    <small>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </small>
  </FooterS>
)

export default Footer
