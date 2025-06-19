import React from 'react'
import { useProductStore } from '../../../store/productStore';
interface Product {
    no: number;
    date: string;
    desc: string;
    content: string;
}
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from 'react-icons/md';
const ProductsTable = ({ product }: { product: Product[] }) => {
    const {
        createProduct,
        openDeleteModal

    } = useProductStore();
    const handleEdit = (item: Product) => {
        createProduct(item);
    }
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
                                <button className="btn-edit" onClick={() => handleEdit(item)}><CiEdit /></button>
                                <button className="btn-delete" onClick={() => openDeleteModal()}><MdOutlineDelete />
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