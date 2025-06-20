interface Product {
    no: number;
    date: string;
    desc: string;
    content: string;
}
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from 'react-icons/md';
import '../css/tables.css'
import { useCampinstStore } from "../../../store/campaignsStore";
const CampaignsTable = ({ product }: { product: Product[] }) => {
  const {  editCampins, deleteModalFunc } = useCampinstStore();
    return (
        <div>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Content</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item) => (
                        <tr key={item.no}>
                            <td>{item.no}</td>
                            <td>{item.date}</td>
                            <td>{item.desc}</td>
                            <td>{item.content}</td>
                            <td className='actions'>
                                <button className="btn-edit" onClick={() => editCampins(item)}><CiEdit /></button>
                                <button className="btn-delete" onClick={() => deleteModalFunc()}><MdOutlineDelete />
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default CampaignsTable