import '../css/tables.css'

import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import type { Category } from '../../../types/Types';

interface Props {
  categories: Category[];
  handleEdit: (category: Category) => void;
  openDeleteModal: (category: Category) => void;
}

const CategoryTable = ({ categories, handleEdit, openDeleteModal }: Props) => {
  return (
    <div >
      <table className='products-table'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item.id} >
              <td >{item.id}</td>
              <td>{item.name}</td>
              <td >
                <img
                  src={item.img_url}
                  alt={item.name}
                 
                />
              </td>
              <td>{item.description}</td>
              <td >
                {new Date(item.created_at).toLocaleDateString()}
              </td>
              <td >
                <button
                 
                  onClick={() => handleEdit(item)}
                >
                  <CiEdit size={20} />
                </button>
                <button
                 
                  onClick={() => openDeleteModal(item)}
                >
                  <MdOutlineDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
