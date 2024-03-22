import styled from 'styled-components'
import useGlobalContext from '../../hooks/useGlobalContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faPlus,
  fa7, fa8, fa9,
  faMinus,
  fa4, fa5, fa6,
  faDivide,
  fa1, fa2, fa3,
  faMultiply,
  fa0,
  faEquals
} from "@fortawesome/free-solid-svg-icons"

const KeysContainer = styled.div`
  grid-template-columns: var(--grid--template-colums__calulator__keys);
`

const BtnKeys = styled.button`
  &.btn-keys{
    padding: var(--padding__calculator__btn-keys);
    background-color: var(--bg-color__calculator__btn-keys);
    border: var(--border__calculator__btn-keys);
    border-radius: var(--border-radius__calculator__btn-keys);
    font-size: var(--font-size__calculator__btn-keys);
    cursor: pointer;
    transition: background-color 0.25s;
    outline: none;
  }

  &.btn-calculate{
    width: var(--width__calculator__btn-calculate);
      margin-top: var(--margin-top__calculator__btn-calculate);
      background-color: var(--bg-color__calculator__btn-calculate);
      box-sizing: var(--box-sizing__calculator__btn-calculate);
  }

  &:hover{
    background-color: var(--bg-color__calculator__btn-keys_hover);
  }
`

const Keys = () => {
  const keysArray = [
    { symbol: '+', value: faPlus },
    { symbol: '7', value: fa7 },
    { symbol: '8', value: fa8 },
    { symbol: '9', value: fa9 },
    { symbol: '-', value: faMinus },
    { symbol: '4', value: fa4 },
    { symbol: '5', value: fa5 },
    { symbol: '6', value: fa6 },
    { symbol: '÷', value: faDivide },
    { symbol: '1', value: fa1 },
    { symbol: '2', value: fa2 },
    { symbol: '3', value: fa3 },
    { symbol: 'x', value: faMultiply },
    { symbol: '0', value: fa0 }
  ]

  const { appendToDisplay, cleanDisplay, calculate } = useGlobalContext()

  return (
    <>
      <KeysContainer className="keys d-grid gap-10">
        { keysArray.map((key, index) => (
          <BtnKeys 
            className="btn-keys" 
            key={index}
            onClick={() => appendToDisplay(key.symbol)}><FontAwesomeIcon icon={key.value} /> </BtnKeys>
        )) }
        <BtnKeys className="btn-keys" onClick={() => appendToDisplay('.')}>.</BtnKeys>
        <BtnKeys className="btn-keys" onClick={() => cleanDisplay()}>C</BtnKeys>
      </KeysContainer>
      <BtnKeys className="btn-calculate btn-keys" onClick={() => calculate()}>
        <FontAwesomeIcon icon={faEquals} />
      </BtnKeys>
    </>
  )
}

export default Keys