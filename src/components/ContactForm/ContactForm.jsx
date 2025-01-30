import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
// import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const initialValues = { name: "", number: "" };
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Name is required"),
    number: Yup.number().required("Number is required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.contactFormWrapper}>
          <div className={s.contactFormWrapperField}>
            <label htmlFor="name">
              <span>Name</span>
            </label>
            <Field name="name" className={s.contactForm} />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={s.contactFormWrapperField}>
            <label htmlFor="number">
              <span>Number</span>
            </label>
            <Field name="number" className={s.contactForm} />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit" className={s.contactFormBtn}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
