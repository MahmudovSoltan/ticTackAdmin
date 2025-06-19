import { useFormik } from "formik"
import { loginSchema } from "../../utils/validations";
import Button from "../../ui/button";

const LoginRight = () => {
    const formik = useFormik({
        initialValues: {
            phone: '',
            password: ''
        },
        validationSchema: loginSchema, // You can add a validation schema here if needed
        onSubmit: values => {
            console.log(values);
        }
    });
    return (
        <div className="login-right">
            <h2 className="login-right-title">
                Admin Panel
            </h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="phone">
                    <label htmlFor="phone">Telefon</label>
                    <div className="input-wrapper">
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="telefon"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />


                    </div>
                    {formik.errors.phone && formik.touched.phone ? (
                        <div className="error-message">{formik.errors.phone}</div>
                    ) : null}
                </div>
                <div className="password">
                    <label htmlFor="password">Parol</label>
                    <div className="input-wrapper">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="*********"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    {formik.errors.password && formik.touched.password ? (
                        <div className="error-message">{formik.errors.password}</div>
                    ) : null}
                </div>
                <Button title="Login" type="submit" onClick={formik.handleSubmit} />
            </form>
        </div>
    )
}

export default LoginRight