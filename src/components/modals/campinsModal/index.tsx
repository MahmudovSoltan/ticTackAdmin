import { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import Button from "../../../ui/button";
import { useCampinstStore } from "../../../store/campaignsStore";
import { uploadImage } from "../../../services/uploadImage";

const MAX_SIZE_MB = 1;

const CampinsModal = () => {
  const {
    closeCampingsModal,
    createCampings, 
    product,
    editCampinsFuntion,
    fetchCampins,
  } = useCampinstStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [data, setData] = useState({
    title: product?.title ?? "",
    description: product?.description ?? "",
    img_url: product?.img_url ?? "",
  });

  /* ------ text inputlar ------ */
  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

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
      setData((d) => ({ ...d, img_url: url }));     // url state-ə yazılır
    } catch (err) {
      console.error(err);
      alert("Şəkli yükləmək mümkün olmadı!");
    } finally {
      setIsUploading(false);
    }
  };

  /* ------ form göndərildi ------ */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    // hələ upload gedirsə bloka sal
    if (isUploading) {
      alert("Zəhmət olmasa şəkil yüklənməsini gözləyin…");
      return;
    }

    // img_url boş ola bilməz
    if (!data.img_url) {
      alert("Şəkil yükləmək mütləqdir!");
      return;
    }

    if (product?.id) {
      await editCampinsFuntion(product.id, data);
    } else {
      await createCampings(data);
    }


    await fetchCampins();
    closeCampingsModal();
  };

  return (
    <div className="product-form-modal">
      <div className="overlay" onClick={closeCampingsModal}></div>

      <form className="product-form" onSubmit={handleSubmit}>
        {/* ——— Şəkil seçimi ——— */}
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
        <div>
           {(preview || product?.img_url) && (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src={preview || product?.img_url}
                                alt="Şəkil ön görünüşü"
                                style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 6, marginTop: 8 }}
                            />
                        </div>
                    )}
        </div>

        {/* ——— Digər inputlar ——— */}
        <label>Başlıq</label>
        <input
          name="title"
          value={data.title}
          onChange={handleChangeInput}
          required
        />

        <label>Açıqlama</label>
        <textarea
          name="description"
          value={data.description}
          onChange={handleChangeInput}
          required
        />

        {/* ——— Submit ——— */}
        <Button
          type="submit"
          title={product ? "Dəyişiklikləri yadda saxla" : "Məlumatları yarat"}
          disabled={isUploading}
        />
      </form>
    </div>
  );
};

export default CampinsModal;
