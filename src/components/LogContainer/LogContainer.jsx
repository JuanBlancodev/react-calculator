import useGlobalContext from '../../hooks/useGlobalContext'
import Table from "./Table"
import ModalContainer from './ModalDelete/ModalContainer'

import '../../styles/LogContainer/LogContainer.css'

const LogContainer = () => {
  const { log, cleanLog } = useGlobalContext()
  return (
    <div className="container-log">
       <h1 className="log-title text-center">Registro de cálculos</h1>
       <Table />

       <button 
          className="btn__clear-log text-center color-white" 
          disabled={log.length === 0}
          onClick={() => cleanLog()}>Limpiar registros</button>
          
        <ModalContainer />
    </div>
  )
}

export default LogContainer