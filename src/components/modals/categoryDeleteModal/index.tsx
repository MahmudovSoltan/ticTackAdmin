import '../css/modal.css'
import Button from '../../../ui/button'
import image from '../../../assets/images/image 16.svg'
import { useCategoryStore } from '../../../store/categoryStore';
const CategoryDeledeModal = () => {
    const { closeModals, selectedCategory, deleteCategory, fetchCategories } = useCategoryStore();
    const handleDeleteProduct = async () => {
        if (selectedCategory?.id !== undefined) {
            await deleteCategory(selectedCategory.id);
        }
        await fetchCategories()
        closeModals()
    }
    return (
        <div className='product-delete-modal'>
            <div className="overlay" onClick={closeModals}></div>
            <div className='product-delete-content'>
                <img src={image} alt="Product" />
                <p>Are you sure you want to delete this product?</p>
                <div className='product-delete-buttons'>
                    <Button title='Təsdiqlə' style={{ fontSize: "22px" }} onClick={handleDeleteProduct} />
                    <Button title='İndi yox' className='cancel' style={{ fontSize: "22px" }} onClick={closeModals} />
                </div>
            </div>
        </div>
    )
}

export default CategoryDeledeModal