import { useProductStore } from "../../store/productStore";
import Button from "../../ui/button"

const ProductsHeader = () => {
  const {
    openProductModal
  } = useProductStore();
  return (
    <div className="products-header">
      <p>Kampaniylar</p>
      <Button title="Əlavə et" className="btn-primary" style={{ width: "89px", height: "40px" }} onClick={openProductModal} />
    </div>
  )
}

export default ProductsHeader