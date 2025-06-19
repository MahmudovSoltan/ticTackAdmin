import { useProductStore } from "../../../store/productStore";
import type { Product } from "../../../types/Types";
import Button from "../../../ui/button"

const ProductFormModal = ({ product }: { product: Product|null }) => {
    const { closeProductModal,
      
    } = useProductStore();
   console.log("ProductFormModal", product);
   
    return (
        <div className='product-form-modal'>
            <div className="overlay" onClick={closeProductModal}></div>

            <form className="product-form">
                <div className="close-button" onClick={closeProductModal}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_11_9572)">
                            <path d="M9.46585 8.01364L15.6959 1.78336C16.1014 1.37811 16.1014 0.722866 15.6959 0.317612C15.2907 -0.0876416 14.6355 -0.0876416 14.2302 0.317612L7.99992 6.54789L1.76983 0.317612C1.36439 -0.0876416 0.709336 -0.0876416 0.304083 0.317612C-0.101361 0.722866 -0.101361 1.37811 0.304083 1.78336L6.53417 8.01364L0.304083 14.2439C-0.101361 14.6492 -0.101361 15.3044 0.304083 15.7097C0.506045 15.9118 0.771596 16.0134 1.03696 16.0134C1.30232 16.0134 1.56768 15.9118 1.76983 15.7097L7.99992 9.47939L14.2302 15.7097C14.4323 15.9118 14.6977 16.0134 14.9631 16.0134C15.2284 16.0134 15.4938 15.9118 15.6959 15.7097C16.1014 15.3044 16.1014 14.6492 15.6959 14.2439L9.46585 8.01364Z" fill="#1A1D28" />
                        </g>
                        <defs>
                            <clipPath id="clip0_11_9572">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="product-form-content">
                    <div>
                        <label htmlFor="productName">Şəkil ünvanı</label>

                        <input type="text" id="productName" name="productName" required />
                    </div>
                    <div>
                        <label htmlFor="productDescription">Başlıq</label>
                        <input id="productDescription" type="text" name="productDescription" required></input>
                    </div>
                    <div>
                        <label htmlFor="productPrice">Açıqlama</label>
                        <textarea id="productPrice" name="productPrice" required></textarea>
                    </div>
                </div>
                <Button type="submit" title="Məlumatları yarat" style={{ fontSize: "22px" }} />
            </form>
        </div>
    )
}

export default ProductFormModal