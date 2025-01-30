import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import s from "./App.module.css";
import { selectError, selectLoading } from "./redux/contactsSlice.js";
import { fetchContacts } from "./redux/contactsOps.js";
import { useDispatch, useSelector } from "react-redux";
import { Triangle } from "react-loader-spinner";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  return (
    <div>
      <h1 className={s.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isError && (
        <>
          <h2>Something went wrong</h2>
        </>
      )}
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

export default App;
