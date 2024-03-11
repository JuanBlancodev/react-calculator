import useGlobalContext from "../../hooks/useGlobalContext"

const TableItem = ({ formula, result }) => {
  const { putFormulaOnDisplay } = useGlobalContext()
  return (
    <div className="table-result-item">
        <div 
          className="table-item item-formula" 
          onClick={() => putFormulaOnDisplay(formula)}>{ formula }</div>
        <div className="table-item">{ result }</div>
    </div>
  )
}

export default TableItem