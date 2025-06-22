
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from 'react-icons/md';
import '../css/tables.css'
import { useCampinstStore } from "../../../store/campaignsStore";
import type { CampaignsType } from "../../../types/Types";
const CampaignsTable = ({ product }: { product: CampaignsType[] }) => {
    const { editCampins, deleteModalFunc } = useCampinstStore();
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
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.created_at}</td>
                            <td>{item?.description || "-"}</td>
                            <td>{item.title}</td>
                            <td className='actions'>
                                <button className="btn-edit" onClick={() => editCampins(item)}><CiEdit /></button>
                                <button className="btn-delete" onClick={() => item.id !== undefined && deleteModalFunc(item.id)}><MdOutlineDelete />
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