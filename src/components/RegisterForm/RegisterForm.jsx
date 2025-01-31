import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import s from "./RegisterForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    password: "",
    email: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.container}>
          <h3>Register</h3>
          <label className={s.label}>
            <span>Name:</span>
            <Field name="name" type="text" className={s.fieldForm} />
          </label>

          <label className={s.label}>
            <span>Email:</span>
            <Field name="email" type="email" className={s.fieldForm} />
          </label>

          <label className={s.label}>
            <span>Password:</span>
            <Field name="password" type="password" className={s.fieldForm} />
          </label>
          <button type="submit" className={s.formBtn}>
            Register
          </button>
          <p>
            Do you already have an account?
            <Link to="/login" className={s.link}>
              Log in!{" "}
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
