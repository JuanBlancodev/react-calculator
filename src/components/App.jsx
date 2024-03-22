import styled from 'styled-components'

import Calculator from './Calculator/Calculator'
import LogContainer from './LogContainer/LogContainer'
import HeaderWatermark from 'react-header-watermark'

import 'animate.css'
import 'react-header-watermark/dist/index.css'

import { PROJECT_NAME, GITHUB } from '../configs/config'

const Container = styled.div`
  margin-top: var(--margin-top__container);
`

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderWatermark projectName={PROJECT_NAME} github={GITHUB} />
      <Container className="container text-center d-flex justify-center gap-100 flex-wrap">
        <Calculator />
        <LogContainer />
      </Container>
    </>
  )
}

export default App