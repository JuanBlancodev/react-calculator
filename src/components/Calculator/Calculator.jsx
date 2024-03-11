import Keys from "./Keys"

import '../../styles/Calculator/Calculator.css'
import Display from "./Display"

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <Keys />
    </div>
  )
}

export default Calculator