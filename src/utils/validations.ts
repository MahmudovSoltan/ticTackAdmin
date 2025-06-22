import * as Yup from 'yup';

export const loginSchema = Yup.object({
  phone: Yup.string()
    .required('Nömrə vacibdir')
    .matches(/^(\+994|0)(50|51|55|70|77|10)[0-9]{7}$/, 'Etibarlı nömrə daxil edin'),
  password: Yup.string()
    .required('Şifrə vacibdir')
    .min(6, 'Minimum 6 simvol olmalıdır'),
});


export const productSchema = Yup.object({
  title: Yup.string().required("Başlıq mütləqdir"),
  description: Yup.string().required("Açıqlama mütləqdir"),
  price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, "Qiymət düzgün formatda deyil")
    .required("Qiymət mütləqdir"),
  type: Yup.string().required("Ölçü vahidi mütləqdir"),
  // img_url: Yup.string().url("Düzgün URL deyil").optional(),
  category_id: Yup.number().required("Kateqoriya seçilməlidir")
});