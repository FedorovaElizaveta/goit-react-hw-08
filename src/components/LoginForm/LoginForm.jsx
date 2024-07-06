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
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor={emailId}>Email</label>
        <Field name="email" id={emailId}></Field>
        <ErrorMessage name="email" component="span" />

        <label htmlFor={passwordId}>Password</label>
        <Field name="password" type="password" id={passwordId}></Field>
        <ErrorMessage name="password" component="span" />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
