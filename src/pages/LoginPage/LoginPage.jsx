import css from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (userData) => {
    dispatch(login(userData));
  };

  return (
    <div className={css.pageWrapper}>
      <LoginForm submit={handleLogin} />
    </div>
  );
};

export default LoginPage;
