import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors";
import { logoutThunk } from "../../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={s.menuWrapper}>
      <p className={s.menuText}>Welcome, {name}</p>
      <button
        type="submit"
        onClick={() => dispatch(logoutThunk())}
        className={s.menuBtn}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
