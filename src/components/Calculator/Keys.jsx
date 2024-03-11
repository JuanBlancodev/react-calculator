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
import '../../styles/Calculator/Keys.css'

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
      <div className="keys">
        { keysArray.map((key, index) => (
          <button 
            className="btn-keys" 
            key={index}
            onClick={() => appendToDisplay(key.symbol)}><FontAwesomeIcon icon={key.value} /> </button>
        )) }
        <button className="btn-keys" onClick={() => appendToDisplay('.')}>.</button>
        <button className="btn-keys" onClick={() => cleanDisplay()}>C</button>
      </div>
      <button className="calculateButton btn-keys" onClick={() => calculate()}>
        <FontAwesomeIcon icon={faEquals} />
      </button>
    </>
  )
}

export default Keys