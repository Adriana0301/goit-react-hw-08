import { NavLink } from "react-router-dom";
import s from "./AuthNax.module.css";

const AuthNav = () => {
  return (
    <div className={s.authNavWrapper}>
      <NavLink to="/register" className={s.navLinkColor}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.navLinkColor}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
