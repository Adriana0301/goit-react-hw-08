import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { Triangle } from "react-loader-spinner";
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={s.contactListItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
