import TableBody from './TableBody'
import TableHeader from './TableHeader'

import '../../styles/LogContainer/Table.css'

const Table = () => {
  return (
    <div className="table d-grid gap-10">
        <TableHeader />
        <TableBody />
    </div>
  )
}

export default Table