import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsOps";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contact}>
      <div className={s.contactContainer}>
        <div className={s.contactWrapper}>
          <BsFillTelephoneFill color="#007bhf" />
          <p className={s.contactText}>{name}</p>
        </div>
        <div className={s.contactWrapper}>
          <IoPersonSharp color="#007bhf" />
          <p className={s.contactText}> {number}</p>
        </div>
      </div>
      <button
        className={s.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
