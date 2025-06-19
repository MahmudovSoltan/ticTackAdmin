import * as Yup from 'yup';

export const loginSchema = Yup.object({
  phone: Yup.string()
    .required('Nömrə vacibdir')
    .matches(/^(\+994|0)(50|51|55|70|77)[0-9]{7}$/, 'Etibarlı nömrə daxil edin'),
  password: Yup.string()
    .required('Şifrə vacibdir')
    .min(6, 'Minimum 6 simvol olmalıdır'),
});
