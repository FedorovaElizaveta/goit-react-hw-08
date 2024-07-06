import css from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { register } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleRegister = (userData) => {
    dispatch(register(userData));
  };

  return (
    <div className={css.pageWrapper}>
      <RegistrationForm submit={handleRegister} />
    </div>
  );
};

export default RegistrationPage;
