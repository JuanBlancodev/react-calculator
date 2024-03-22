import styled from 'styled-components'
import Keys from "./Keys"
import Display from "./Display"

const Calculator_ = styled.div`
  width: var(--width__calculator);
  max-height: var(--max-height__calculator);
  padding: var(--padding__calculator);
  background-color: var(--bg-color__calculator);
  border-radius: var(--border-radius__calculator);
  box-shadow: var(--border-radius__calculator);
`

const Calculator = () => {
  return (
    <Calculator_ className="calculator">
      <Display />
      <Keys />
    </Calculator_>
  )
}

export default Calculator