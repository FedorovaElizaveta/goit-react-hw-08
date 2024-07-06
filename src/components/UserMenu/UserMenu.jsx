import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenuWrapper}>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleLogout} className={css.userMenuBtn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
