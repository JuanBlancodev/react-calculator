import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"
import useGlobalContext from "../../../hooks/useGlobalContext"

const ModalButtons = () => {
  const { confirmCleanLog, cancelCleanLog } = useGlobalContext()
  return (
    <div className="modal-buttons d-flex justify-around">
      <button className="btn-confirm color-white" onClick={() => confirmCleanLog()}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="btn-cancel color-white" onClick={() => cancelCleanLog()}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default ModalButtons