import { useFormik } from "formik";
import { loginSchema } from "../../utils/validations";
import Button from "../../ui/button";
import { login } from "../../services/login";
import { useState } from "react";

const initialValues = {
  phone: "",
  password: ""
};

const LoginRight = () => {
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true)
      await login(values);
      setLoading(false)
    }
  });

  return (
    <div className="login-right">
      <h2 className="login-right-title">Admin Panel</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="phone">
          <label htmlFor="phone">Telefon</label>
          <div className="input-wrapper" style={{
            border: formik.errors.phone && formik.touched.phone ? "1px solid #e53935" : undefined,
          }} >
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="telefon"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
          {formik.errors.phone && formik.touched.phone && (
            <div className="error-message">{formik.errors.phone}</div>
          )}
        </div>

        <div className="password">
          <label htmlFor="password">Parol</label>
          <div className="input-wrapper" style={{
            border: formik.errors.password && formik.touched.password ? "1px solid #e53935" : undefined,
          }}>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="*********"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password && formik.touched.password && (
            <div className="error-message">{formik.errors.password}</div>
          )}
        </div>
        <Button title="Login" type="submit" loading={loading} />
      </form>
    </div>
  );
};

export default LoginRight;
