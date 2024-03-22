import { createContext, useState } from "react";
// import { evaluate } from 'mathjs'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [display, setDisplay] = useState('')
  const [log, setLog] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const appendToDisplay = (value) => setDisplay(display + value)

  const deleteLastCharacter = () => setDisplay(display.slice(0, -1))

  const cleanDisplay = () => setDisplay('')

  const calculate = () => {
    if(display.length < 3) return;
    const formula = display.replace(/([^0-9.])/g, ' $1 ');

    // const replacedDisplay = display.replace(/x/g, '*').replace(/÷/g, '/');
    // const result = evaluate(replacedDisplay).toString().replace(/\*/g, 'x').replace(/\//g, '÷');
    const result = 1

    setDisplay(result)
    setLog([...log, { formula, result }])
  }

  const cleanLog = () => {
    setModalVisible(true)
  }
  
  const putFormulaOnDisplay = (formula) => setDisplay(formula.replace(/\s/g, ''))

  const confirmCleanLog = () => {
    closeModelDeleteLog()
    setLog([])
  }

  const cancelCleanLog = () => closeModelDeleteLog()

  const closeModelDeleteLog = () => {
    const modal = document.querySelector('.modal-delete')
    modal.classList.remove('fadeIn')

    setTimeout(() => {
      setModalVisible(false)
      modal.classList.add('fadeIn')
    }, 500)
  }

  return (
    <GlobalContext.Provider value={{ 
      display, 
      appendToDisplay, 
      deleteLastCharacter,
      cleanDisplay,
      calculate,
      log,
      modalVisible,
      cleanLog,
      confirmCleanLog,
      cancelCleanLog,
      putFormulaOnDisplay
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }