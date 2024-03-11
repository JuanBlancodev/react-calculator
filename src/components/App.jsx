// Components
import Calculator from './Calculator/Calculator'
import Header from './Header'

import '../styles/App.css'
import 'animate.css'
import LogContainer from './LogContainer/LogContainer'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Calculator />
        <LogContainer />
      </div>
    </>
  )
}

export default App