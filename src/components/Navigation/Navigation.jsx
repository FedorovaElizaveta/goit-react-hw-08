import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const getStyles = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navLinkActive);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <ul className={css.navLinkList}>
        <li>
          <NavLink to="/" className={getStyles}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts" className={getStyles}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
