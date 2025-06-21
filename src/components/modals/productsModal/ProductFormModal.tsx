import { useProductStore } from "../../../store/productStore";
import type { Product } from "../../../types/Types";
import Button from "../../../ui/button"

const ProductFormModal = ({ product }: { product: Product | null }) => {
    const { closeProductModal,

    } = useProductStore();

    // Example static categories, replace with your actual data fetching logic if needed
    const categories = [
        { id: 1, name: "Meyvə" },
        { id: 2, name: "Tərəvəz" },
        { id: 3, name: "Ət məhsulları" }
    ];

    return (
        <div className='product-form-modal'>
            <div className="overlay" onClick={closeProductModal}></div>
         
                <form className="product-form">
                    <div className="close-button" onClick={closeProductModal}>
                        {/* SVG close button (eyni qalır) */}
                    </div>

                    <div className="product-form-content">
                        {/* Title */}
                        <div>
                            <label htmlFor="title">Başlıq</label>
                            <input type="text" id="title" name="title" required />
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description">Açıqlama</label>
                            <textarea id="description" name="description" required></textarea>
                        </div>

                        {/* Price */}
                        <div>
                            <label htmlFor="price">Qiymət</label>
                            <input type="number" id="price" name="price" step="0.01" required />
                        </div>

                        {/* Type (ENUM) */}
                        <div>
                            <label htmlFor="type">Ölçü vahidi</label>
                            <select id="type" name="type" required>
                                <option value="kg">Kg</option>
                                <option value="pcs">Ədəd</option>
                                <option value="lt">Litr</option>
                                {/* Lazım olarsa digər variantlar da əlavə oluna bilər */}
                            </select>
                        </div>

                        {/* Image URL (optional) */}
                        <div>
                            <label htmlFor="img_url">Şəkil ünvanı (opsional)</label>
                            <input type="text" id="img_url" name="img_url" />
                        </div>

                        {/* Category ID */}
                        <div>
                            <label htmlFor="category_id">Kateqoriya</label>
                            <select id="category_id" name="category_id" required>
                                {/* Dinamik olaraq map olunacaq */}
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <Button type="submit" title="Məlumatları yarat" style={{ fontSize: "22px" }} />
                </form>

  
        </div>

    )
}

export default ProductFormModal