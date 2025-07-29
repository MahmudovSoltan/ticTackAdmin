import { useFormik } from "formik";
import { useProductStore } from "../../../store/productStore";
// Remove 'type' from ProductMeasure import to ensure it's imported as a value
import type { CreateProductType } from "../../../types/Types";
import Button from "../../../ui/button";
import { productSchema } from "../../../utils/validations";
import { useCategoryStore } from "../../../store/categoryStore";
import { useShallow } from "zustand/shallow";
import { useEffect, useRef, useState } from "react";
import { uploadImage } from "../../../services/uploadImage";
import { FiUpload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const MAX_SIZE_MB = 1;
const ProductFormModal = ({ product }: { product: CreateProductType | null }) => {
    const { closeProductModal, createProduct, editProductFunction, productId, fetchAllProducts } = useProductStore();
    const { categories, fetchCategories } = useCategoryStore(useShallow((state) => ({
        categories: state.categories,
        fetchCategories: state.fetchCategories,
    })))
    const [preview, setPreview] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);


    const validationSchema = productSchema;

    /* ------ file seçildi ------ */
    const handleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // 1️⃣ ölçüyə nəzarət
        if (file.size / 1024 / 1024 > MAX_SIZE_MB) {
            alert("Şəkil 1 MB-dan böyükdür!");
            return;
        }

        // 2️⃣ ön görünüş
        setPreview(URL.createObjectURL(file));

        // 3️⃣ serverə yüklə
        try {
            setIsUploading(true);
            const url = await uploadImage(file);          // ⬅️  API
            formik.setFieldValue("img_url", url);           // url state-ə yazılır
        } catch (err) {
            console.error(err);
            alert("Şəkli yükləmək mümkün olmadı!");
        } finally {
            setIsUploading(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            title: product?.title || "",
            description: product?.description || "",
            price: String(product?.price ?? "") || "",
            type: product?.type || "kg",
            img_url: product?.img_url || "",
            category_id: product?.category_id || 1,
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



    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <div className='product-form-modal'>
            <div className="overlay" onClick={closeProductModal}></div>
            <div className="product_modal_container">
                <form className="product-form" onSubmit={formik.handleSubmit}>
                    <div className="close-button" onClick={closeProductModal}>
                        {/* SVG close button */}
                        <IoMdClose size={24}/>
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
                                <option value='kg'>Kiloqram</option>
                                <option value="gr">Qram</option>
                                <option value="litre">Litr</option>
                                <option value="ml">Millilitr</option>
                                <option value="meter">Metr</option>
                                <option value="cm">Santimetr</option>
                                <option value="mm">Millimetr</option>
                                <option value="piece">Ədəd</option>
                                <option value="packet">Paket</option>
                                <option value="box">Qutu</option>
                            </select>
                            {formik.touched.type && formik.errors.type && (
                                <div className="form-error">{formik.errors.type}</div>
                            )}
                        </div>

                        {/* Image URL */}
                        <div className="product-image-url">
                            <label>Şəkil</label>

                            <button
                                type="button"
                                onClick={() => inputRef.current?.click()}
                                className="product-image-url-button"
                                disabled={isUploading}
                            >
                                <FiUpload size={24} />
                            </button>

                            <input
                                type="file"
                                accept="image/*"
                                ref={inputRef}
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                            />
                        </div>
                        {(preview || product?.img_url) && (
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <img
                                    src={preview || product?.img_url}
                                    alt="Şəkil ön görünüşü"
                                    style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 6, marginTop: 8 }}
                                />
                            </div>
                        )}

                        {/* Category */}
                        <div>
                            <label htmlFor="category_id">Kateqoriya</label>
                            <select
                                id="category_id"
                                name="category_id"
                                value={formik.values.category_id}
                                onChange={(e) =>
                                    formik.setFieldValue("category_id", Number(e.target.value)) // ⬅️ Number(...)
                                }
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

                    <Button type="submit" title={product ? "Məhsula düzəliş et":"Məhsul yarat"} style={{ fontSize: "22px" }} />
                </form>
            </div>
        </div>
    );
};

export default ProductFormModal;



