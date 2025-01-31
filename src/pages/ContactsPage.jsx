import { Triangle } from "react-loader-spinner";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import s from "./ContactPage.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations.js";

const ContactsPage = () => {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={s.appTitle}>Your phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && (
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass={s.wrapperTriangle}
        />
      )}
    </div>
  );
};

export default ContactsPage;
