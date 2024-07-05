import { useDispatch } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { register } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleRegister = (userData) => {
    dispatch(register(userData));
  };

  return (
    <div>
      <RegistrationForm submit={handleRegister} />
    </div>
  );
};

export default RegistrationPage;
