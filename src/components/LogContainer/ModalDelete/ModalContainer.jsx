import useGlobalContext from "../../../hooks/useGlobalContext"
import ModalButtons from "./ModalButtons"
import ModalQuestion from "./ModalQuestion"

import '../../../styles/LogContainer/ModalContainer.css'

const ModalContainer = () => {
  const { modalVisible } = useGlobalContext()
  return (
    <div className={`modal-delete fadeIn ${modalVisible ? "visible" : ""}`}>
        <ModalQuestion />
        <ModalButtons />
    </div>
  )
}

export default ModalContainer