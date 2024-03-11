import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons'
import Anchor from './custom/Anchor'
import '../styles/Header.css'

import config from '../configs/config'

const Header = () => {

  return (
    <div className="header-container">
      <h1 className="info-header">
        Calculadora con <Anchor address={config.URL_REACT_WEBSITE}>React <FontAwesomeIcon icon={faReact} className='icon-react' /></Anchor> 
      </h1>
      <Anchor address={config.URL_GITHUB_PROFILE} className="info-span">
        <FontAwesomeIcon icon={faGithub} /> @JuanBlancodev
      </Anchor>
    </div>
  )
}

export default Header