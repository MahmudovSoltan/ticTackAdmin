import { useFormik } from "formik";
import * as Yup from "yup";
import { useProductStore } from "../../../store/productStore";
import type { CreateProductType } from "../../../types/Types";
import Button from "../../../ui/button";
import { productSchema } from "../../../utils/validations";

const ProductFormModal = ({ product }: { product: CreateProductType | null }) => {
    const { closeProductModal, createProduct, editProductFunction, productId, fetchAllProducts } = useProductStore();

    const categories = [
        { id: 1, name: "Meyvə" },
        { id: 2, name: "Tərəvəz" },
        { id: 3, name: "Ət məhsulları" }
    ];

    const validationSchema = productSchema;

    const formik = useFormik({
        initialValues: {
            title: product?.title || "",
            description: product?.description || "",
            price: String(product?.price ?? "") || "",
            type: product?.type || "kg",
            img_url: product?.img_url || "",
            category_id: product?.category?.id || 1,
        },
        validationSchema,
        onSubmit: async (values) => {
            if (product) {
                if (productId !== null && productId !== undefined) {
                    await editProductFunction(productId, values);
                } else {
                    // Optionally handle the error or show a message
                    return;
                }
            } else {
                await createProduct(values);
            }
            closeProductModal();
            await fetchAllProducts()
        },
    });

    return (
        <div className='product-form-modal'>
            <div className="overlay" onClick={closeProductModal}></div>
            <form className="product-form" onSubmit={formik.handleSubmit}>
                <div className="close-button" onClick={closeProductModal}>
                    {/* SVG close button */}
                </div>

                <div className="product-form-content">
                    {/* Title */}
                    <div>
                        <label htmlFor="title">Başlıq</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.title && formik.errors.title && (
                            <div className="form-error">{formik.errors.title}</div>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description">Açıqlama</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        ></textarea>
                        {formik.touched.description && formik.errors.description && (
                            <div className="form-error">{formik.errors.description}</div>
                        )}
                    </div>

                    {/* Price */}
                    <div>
                        <label htmlFor="price">Qiymət</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formik.values.price}
                            onChange={(e) => formik.setFieldValue("price", e.target.value)}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.price && formik.errors.price && (
                            <div className="form-error">{formik.errors.price}</div>
                        )}
                    </div>

                    {/* Type */}
                    <div>
                        <label htmlFor="type">Ölçü vahidi</label>
                        <select
                            id="type"
                            name="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        >
                            <option value="kg">Kg</option>
                            <option value="pcs">Ədəd</option>
                            <option value="lt">Litr</option>
                        </select>
                        {formik.touched.type && formik.errors.type && (
                            <div className="form-error">{formik.errors.type}</div>
                        )}
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="img_url">Şəkil ünvanı (opsional)</label>
                        <input
                            type="text"
                            id="img_url"
                            name="img_url"
                            value={formik.values.img_url}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.img_url && formik.errors.img_url && (
                            <div className="form-error">{formik.errors.img_url}</div>
                        )}
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category_id">Kateqoriya</label>
                        <select
                            id="category_id"
                            name="category_id"
                            value={formik.values.category_id}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        >
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                        {formik.touched.category_id && formik.errors.category_id && (
                            <div className="form-error">{formik.errors.category_id}</div>
                        )}
                    </div>
                </div>

                <Button type="submit" title="Məlumatları yarat" style={{ fontSize: "22px" }} />
            </form>
        </div>
    );
};

export default ProductFormModal;
