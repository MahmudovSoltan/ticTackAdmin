import image from '../../../assets/images/image 16.svg'
import { useProductStore } from '../../../store/productStore';
import Button from '../../../ui/button'
const ProductDeleteModal = () => {
    const {
        closeDeleteModal,
        productId,
        deleteProductFun,
        fetchAllProducts
    } = useProductStore();
    const handleDeleteProduct = async () => {
        if (productId !== null) {
            await deleteProductFun(productId);
            closeDeleteModal();
            await fetchAllProducts()
        }
    }
    return (
        <div className='product-delete-modal'>
            <div className="overlay" onClick={closeDeleteModal}></div>
            <div className='product-delete-content'>
                <img src={image} alt="Product" />

                <div className='product-delete-buttons'>
                    <Button title='Təsdiqlə' style={{ fontSize: "22px" }} onClick={handleDeleteProduct} />
                    <Button title='İndi yox' className='cancel' style={{ fontSize: "22px" }} onClick={closeDeleteModal} />
                </div>
            </div>
        </div>
    )
}

export default ProductDeleteModal