import css from "./LoginForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useId, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { selectError } from "../../redux/auth/selectors";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const LoginForm = ({ submit }) => {
  const emailId = useId();
  const passwordId = useId();
  const error = useSelector(selectError);
  const errorShownRef = useRef(false);

  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  useEffect(() => {
    if (error && !errorShownRef.current) {
      toast.error("Email or password you've entered is incorrect", {
        icon: "❌",
        style: {
          minWidth: "500px",
          borderRadius: 15,
          gap: 20,
        },
      });
      errorShownRef.current = true;
    } else if (!error) {
      errorShownRef.current = false;
    }
  }, [error]);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className={css.formWrapper}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={css.form}>
            <p className={css.formText}>Login</p>
            <div className={css.formFieldsWrapper}>
              <label htmlFor={emailId}>Email</label>
              <Field
                name="email"
                id={emailId}
                className={css.formField}
              ></Field>
              <ErrorMessage
                name="email"
                component="span"
                className={css.formError}
              />

              <label htmlFor={passwordId}>Password</label>
              <Field
                name="password"
                type="password"
                id={passwordId}
                className={css.formField}
              ></Field>
              <ErrorMessage
                name="password"
                component="span"
                className={css.formError}
              />
            </div>

            <button type="submit" className={css.formBtn}>
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
