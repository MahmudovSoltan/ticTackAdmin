import '../css/modal.css'
import Button from '../../../ui/button'
import image from '../../../assets/images/image 16.svg'
import { useCampinstStore } from '../../../store/campaignsStore';
const CampinsDeleteModal = () => {
    const { closeDeleteModal, productId, deleteCampaignFunc, fetchCampins } = useCampinstStore();

    const handleDleteCampings = async () => {

        if (productId !== null) {
            await deleteCampaignFunc(productId);
            await fetchCampins()
        }

        closeDeleteModal()
    }

    return (
        <div className='product-delete-modal'>
            <div className="overlay" onClick={closeDeleteModal}></div>
            <div className='product-delete-content'>
                <img src={image} alt="Product" />
                <p>Are you sure you want to delete this product?</p>
                <div className='product-delete-buttons'>
                    <Button title='Təsdiqlə' style={{ fontSize: "22px" }} onClick={handleDleteCampings} />
                    <Button title='İndi yox' className='cancel' style={{ fontSize: "22px" }} onClick={closeDeleteModal} />
                </div>
            </div>
        </div>
    )
}

export default CampinsDeleteModal