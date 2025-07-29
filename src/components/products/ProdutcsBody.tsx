
import ProductFormModal from "../modals/productsModal/ProductFormModal";
import ProductsTable from "../tables/productsTable/Productstable";
import type { Product } from "../../types/Types";
import { useProductStore } from "../../store/productStore";
import ProductDeleteModal from "../modals/productDeleteModal/ProductDeleteModal";
import TableHeader from "../../ui/tableHeader";
import { useState } from "react";
import Pagination from "../pagination/pagination";
import Loading from "../loading";


const ProductsBody = ({ products, loading }: { products: Product[], loading: boolean }) => {
  const {
    productModal,
    product,
    deleteModal,
    openProductModal,
  } = useProductStore();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;



  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  if (loading) {
    return <div className="products-body"><Loading /></div>

  }
  return (
    <div className="products-body">
      <TableHeader title="Məhsullar" onClick={openProductModal} />
      <ProductsTable product={currentItems} />
      {productModal && <ProductFormModal product={product} />}
      {deleteModal && <ProductDeleteModal />}
      <Pagination onPageChange={handlePageChange} pageCount={pageCount} forcePage={currentPage} />
    </div>
  )
}

export default ProductsBody