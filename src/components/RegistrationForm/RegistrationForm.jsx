import css from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useId, useRef } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { selectError } from "../../redux/auth/selectors";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const RegistrationForm = ({ submit }) => {
  const nameId = useId();
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
      toast.error("Email you've entered is alredy taken", {
        icon: "❌",
        style: {
          minWidth: "450px",
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
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={css.form}>
            <p className={css.formText}>Register</p>
            <div className={css.formFieldsWrapper}>
              <label htmlFor={nameId}>Name </label>
              <Field name="name" id={nameId} className={css.formField} />
              <ErrorMessage
                name="name"
                component="span"
                className={css.formError}
              />

              <label htmlFor={emailId}>Email </label>
              <Field name="email" id={emailId} className={css.formField} />
              <ErrorMessage
                name="email"
                component="span"
                className={css.formError}
              />

              <label htmlFor={passwordId}>Password </label>
              <Field
                name="password"
                type="password"
                id={passwordId}
                className={css.formField}
              />
              <ErrorMessage
                name="password"
                component="span"
                className={css.formError}
              />
            </div>
            <button type="submit" className={css.formBtn}>
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegistrationForm;
