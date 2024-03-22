import useGlobalContext from "../../hooks/useGlobalContext"

const TableItem = ({ formula, result }) => {
  const { putFormulaOnDisplay } = useGlobalContext()
  return (
    <div className="table-result-item d-grid gap-10 column-1-1">
        <div 
          className="table-item item-formula text-center" 
          onClick={() => putFormulaOnDisplay(formula)}>{ formula }</div>
        <div className="table-item text-center">{ result }</div>
    </div>
  )
}

export default TableItem