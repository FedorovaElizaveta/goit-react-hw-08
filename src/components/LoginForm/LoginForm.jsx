import css from "./LoginForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";

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

  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  return (
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
            <Field name="email" id={emailId} className={css.formField}></Field>
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
  );
};

export default LoginForm;
