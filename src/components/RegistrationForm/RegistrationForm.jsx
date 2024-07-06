import css from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";

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

  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  return (
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
        <Form>
          <div className={css.form}>
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
  );
};

export default RegistrationForm;
