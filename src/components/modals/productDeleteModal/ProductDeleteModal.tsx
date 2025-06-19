import image from '../../../assets/images/image 16.svg'
import { useProductStore } from '../../../store/productStore';
import Button from '../../../ui/button'
const ProductDeleteModal = () => {
   const {
   closeDeleteModal
    } = useProductStore();
    return (
        <div className='product-delete-modal'>
            <div className="overlay" onClick={closeDeleteModal}></div>
            <div className='product-delete-content'>
                <img src={image} alt="Product" />
                <p>Are you sure you want to delete this product?</p>
                <div className='product-delete-buttons'>
                    <Button title='Təsdiqlə' style={{fontSize:"22px"}} onClick={closeDeleteModal} />
                    <Button title='İndi yox' className='cancel' style={{fontSize:"22px"}} onClick={closeDeleteModal} />
                </div>
            </div>
        </div>
    )
}

export default ProductDeleteModal