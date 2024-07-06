import css from "./AuthNav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const getLinkStyle = ({ isActive }) => {
  return clsx(css.authLink, isActive && css.authLinkActive);
};

const AuthNav = () => {
  return (
    <ul className={css.authWrapper}>
      <li>
        <NavLink to="/register" className={getLinkStyle}>
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={getLinkStyle}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
