import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import useGlobalContext from "../../../hooks/useGlobalContext"

const ModalButtons = () => {
  const { confirmCleanLog, cancelCleanLog } = useGlobalContext()
  return (
    <div className="modal-buttons">
      <button className="btn-confirm" onClick={() => confirmCleanLog()}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="btn-cancel" onClick={() => cancelCleanLog()}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default ModalButtons