
import ProductFormModal from "../modals/productsModal/ProductFormModal";
import ProductsTable from "../tables/productsTable/Productstable";
import ProductsHeader from "./ProductsHeader"
import type { Product } from "../../types/Types";
import { useProductStore } from "../../store/productStore";
import ProductDeleteModal from "../modals/productDeleteModal/ProductDeleteModal";

interface ProductBodyType {
    products: Product[];

}
const ProductsBody = ({ products }: ProductBodyType) => {
    const {
        productModal,
        product,
        deleteModal,
            
    } = useProductStore();
    return (
        <div className="products-body">
            <ProductsHeader />
            <ProductsTable product={products} />
            {productModal && <ProductFormModal product={product} />}
            {
                deleteModal && <ProductDeleteModal />
            }
        </div>
    )
}

export default ProductsBody