import { useProductStore } from '../../../store/productStore';

import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from 'react-icons/md';
import '../css/tables.css'
import type { CreateProductType, Product } from '../../../types/Types';
const ProductsTable = ({ product }: { product: Product[] }) => {
    const {
        editProduct,
        openDeleteModal
    } = useProductStore();
    const handleEdit = (id:number,item: CreateProductType) => {
        editProduct( id,item)
    }
    return (
        <div>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>image</th>
                        <th>Description</th>
                        <th>Content</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td><img className='table-image' src={item?.img_url
                            } alt="" /></td>
                            <td>{item.description}</td>
                            <td>{item.title}</td>
                            <td className='actions'>
                                <button className="btn-edit" onClick={() => handleEdit(item.id,item)}><CiEdit /></button>
                                <button className="btn-delete" onClick={() => openDeleteModal(item.id)}><MdOutlineDelete />
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default ProductsTable