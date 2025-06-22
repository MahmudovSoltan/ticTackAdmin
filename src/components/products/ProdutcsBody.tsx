
import ProductFormModal from "../modals/productsModal/ProductFormModal";
import ProductsTable from "../tables/productsTable/Productstable";
import type { Product } from "../../types/Types";
import { useProductStore } from "../../store/productStore";
import ProductDeleteModal from "../modals/productDeleteModal/ProductDeleteModal";
import TableHeader from "../../ui/tableHeader";


const ProductsBody = ({ products }: { products: Product[] }) => {
    const {
        productModal,
        product,
        deleteModal,
        openProductModal,
    } = useProductStore();
    return (
        <div className="products-body">
            <TableHeader title="Məhsullar" onClick={openProductModal} />
            <ProductsTable product={products} />
            {productModal && <ProductFormModal product={product} />}
            {deleteModal && <ProductDeleteModal />}
        </div>
    )
}

export default ProductsBody