import React, { useState, useEffect, useRef } from "react";
import { useCategoryStore } from "../../../store/categoryStore";
import Button from "../../../ui/button";
import { uploadImage } from "../../../services/uploadImage";
import { FiUpload } from "react-icons/fi";

// Öz button komponentindirsə düz yol ver

interface Props {
  onClose: () => void;
}

const MAX_SIZE_MB = 1;
const CategoryFormModal = ({ onClose }: Props) => {
  const { selectedCategory, createCategory, updateCategory } = useCategoryStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");


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
      setImgUrl(url);     // url state-ə yazılır
    } catch (err) {
      console.error(err);
      alert("Şəkli yükləmək mümkün olmadı!");
    } finally {
      setIsUploading(false);
    }
  };
  useEffect(() => {
    if (selectedCategory) {
      setName(selectedCategory.name);
      setImgUrl(selectedCategory.img_url);
      setDescription(selectedCategory.description);
    } else {
      setName("");
      setImgUrl("");
      setDescription("");
    }
  }, [selectedCategory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name,
      img_url: imgUrl,
      description,
    };

    if (selectedCategory) {
      await updateCategory(selectedCategory.id, payload);
    } else {
      await createCategory(payload);
    }

    onClose();
  };

  return (
    <div className="product-form-modal">
      <div className="overlay" onClick={onClose}></div>

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="close-button" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0_11_9572)">
              <path
                d="M9.46585 8.01364L15.6959 1.78336C16.1014 1.37811 16.1014 0.722866 15.6959 0.317612C15.2907 -0.0876416 14.6355 -0.0876416 14.2302 0.317612L7.99992 6.54789L1.76983 0.317612C1.36439 -0.0876416 0.709336 -0.0876416 0.304083 0.317612C-0.101361 0.722866 -0.101361 1.37811 0.304083 1.78336L6.53417 8.01364L0.304083 14.2439C-0.101361 14.6492 -0.101361 15.3044 0.304083 15.7097C0.506045 15.9118 0.771596 16.0134 1.03696 16.0134C1.30232 16.0134 1.56768 15.9118 1.76983 15.7097L7.99992 9.47939L14.2302 15.7097C14.4323 15.9118 14.6977 16.0134 14.9631 16.0134C15.2284 16.0134 15.4938 15.9118 15.6959 15.7097C16.1014 15.3044 16.1014 14.6492 15.6959 14.2439L9.46585 8.01364Z"
                fill="#1A1D28"
              />
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

          </div>
             {(preview || selectedCategory?.img_url) && (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src={preview || selectedCategory?.img_url}
                                alt="Şəkil ön görünüşü"
                                style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 6, marginTop: 8 }}
                            />
                        </div>
                    )}
          <div>
            <label htmlFor="categoryName">Başlıq</label>
            <input
              type="text"
              id="categoryName"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="categoryDesc">Açıqlama</label>
            <textarea
              id="categoryDesc"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          title={selectedCategory ? "Məlumatları yenilə" : "Məlumatları yarat"}
          style={{ fontSize: "22px" }}
        />
      </form>
    </div>
  );
};

export default CategoryFormModal;
