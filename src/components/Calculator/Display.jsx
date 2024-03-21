import useGlobalContext from "../../hooks/useGlobalContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons"

import '../../styles/Calculator/Display.css'

const Display = () => {
  const { display, deleteLastCharacter } = useGlobalContext()
  return (
    <div className="display d-flex justify-between align-center">
      <input type="text" disabled value={display} />
      <div className="btn-delete d-flex justify-center align-center" onClick={() => deleteLastCharacter()}>
        <FontAwesomeIcon icon={faDeleteLeft} className="icon__delete-left" />
      </div>
    </div>
  )
}

export default Display