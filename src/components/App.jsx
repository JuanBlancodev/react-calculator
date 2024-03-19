import Calculator from './Calculator/Calculator'
import LogContainer from './LogContainer/LogContainer'
import HeaderWatermark from 'react-header-watermark'

import '../styles/App.css'
import 'animate.css'
import 'react-header-watermark/dist/index.css'

import { PROJECT_NAME, GITHUB } from '../configs/config'

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderWatermark projectName={PROJECT_NAME} github={GITHUB} />
      <div className="container">
        <Calculator />
        <LogContainer />
      </div>
    </>
  )
}

export default App