import { useState } from "react"
import { useCategoryStore } from "../../store/categoryStore"
import TableHeader from "../../ui/tableHeader"
import CategoryDeledeModal from "../modals/categoryDeleteModal"
import CategoryFormModal from "../modals/categoryModal"
import CategoryTable from "../tables/categoriesTable"
import Pagination from "../pagination/pagination"

const CategoriesBody = ({ categories }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

 

  const offset = currentPage * itemsPerPage;
  const currentItems = categories.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(categories.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const { categoryModal, openCreateModal, openEditModal, closeModals, deleteModal, deleteCategory } = useCategoryStore()
  return (
    <div className="category-body">
      <TableHeader onClick={openCreateModal} title="Kategoriyalar" />
      <CategoryTable categories={currentItems} handleEdit={openEditModal} openDeleteModal={deleteCategory} />

      {
        categoryModal && <CategoryFormModal onClose={closeModals} />
      }
      {
        deleteModal && <CategoryDeledeModal />
      }
        <Pagination onPageChange={handlePageChange} pageCount={pageCount} forcePage={currentPage}/>
    </div>
  )
}

export default CategoriesBody