import styled from 'styled-components'
import useGlobalContext from '../../hooks/useGlobalContext'

import Table from "./Table"
import ModalContainer from './ModalDelete/ModalContainer'

const ContainerLog = styled.div`
  position: relative;
  width: var(--width__container-log);
  height: var(--height__container-log);
  max-height: var(--max-height__container-log);
  padding: var(--padding__container-log);
  border: var(--border__container-log);
  border-radius: var(--border-radius__container-log);
  box-shadow: var(--box-shadow__container-log);
`

const LogTitle = styled.h1`
  margin-top: var(--margin-top__container-log__log-title);
`

const LogContainer = () => {
  const { log, cleanLog } = useGlobalContext()
  return (
    <ContainerLog className="container-log">
       <LogTitle className="log-title text-center">Registro de cálculos</LogTitle>
       <Table />

       <button 
          className="btn__clear-log text-center color-white" 
          disabled={log.length === 0}
          onClick={() => cleanLog()}>Limpiar registros</button>
          
        <ModalContainer />
    </ContainerLog>
  )
}

export default LogContainer