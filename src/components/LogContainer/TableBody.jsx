import useGlobalContext from "../../hooks/useGlobalContext"
import TableItem from "./TableItem"

const TableBody = () => {
  const { log } = useGlobalContext()
  return (
    <div className="table-results">
      { log.map((item, index) => (
        <TableItem key={index} formula={item.formula} result={item.result} />
      )) }
    </div>
  )
}

export default TableBody