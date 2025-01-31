import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <NavLink to="/" className={s.navLinkHomeColor}>
          Home
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/contacts" className={s.navLinkContactsColor}>
          Contacts
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
