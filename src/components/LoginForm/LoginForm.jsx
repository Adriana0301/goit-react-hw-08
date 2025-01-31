import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    password: "",
    email: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.container}>
        <h3>Login</h3>
        <label className={s.label}>
          <span>Email:</span>
          <Field name="email" type="email" className={s.fieldForm} />
        </label>

        <label className={s.label}>
          <span>Password:</span>
          <Field name="password" type="password" className={s.fieldForm} />
        </label>

        <button type="submit" className={s.formBtn}>
          Login
        </button>
        <p>
          You don`t have an account.
          <Link to="/register" className={s.link}>
            Let`s create an account!
          </Link>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
