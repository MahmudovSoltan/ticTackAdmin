
import '../../pages/Products/css/product.css'
import Button from '../button'
import './css/tableHeader.css'
interface TableHeaderProps {
    title: string;
    onClick: () => void;
}
const TableHeader = ({ title, onClick }: TableHeaderProps) => {

    return (
        <div className="table-header">
            <p>{title}</p>
            <Button title="Əlavə et" className="btn-primary" style={{ width: "89px", height: "40px" }} onClick={onClick} />
        </div>
    )
}

export default TableHeader