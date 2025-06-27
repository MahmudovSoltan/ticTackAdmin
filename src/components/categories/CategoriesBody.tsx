import { useEffect, useState } from "react"
import { useCategoryStore } from "../../store/categoryStore"
import TableHeader from "../../ui/tableHeader"
import CategoryDeledeModal from "../modals/categoryDeleteModal"
import CategoryFormModal from "../modals/categoryModal"
import CategoryTable from "../tables/categoriesTable"
import Pagination from "../pagination/pagination"

const CategoriesBody = () => {
  const { categoryModal, openCreateModal, openEditModal, closeModals, deleteModal, openDeleteModal, fetchCategories, categories } = useCategoryStore()
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;



  const offset = currentPage * itemsPerPage;
  const currentItems = categories.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(categories.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  useEffect(() => {
    fetchCategories()
  }, [])
  console.log(categories);
  
  return (
    <div className="category-body">
      <TableHeader onClick={openCreateModal} title="Kategoriyalar" />
      <CategoryTable categories={currentItems} handleEdit={openEditModal} openDeleteModal={openDeleteModal} />

      {
        categoryModal && <CategoryFormModal onClose={closeModals} />
      }
      {
        deleteModal && <CategoryDeledeModal />
      }
      <Pagination onPageChange={handlePageChange} pageCount={pageCount} forcePage={currentPage} />
    </div>
  )
}

export default CategoriesBody