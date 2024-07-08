import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useEffect, useId } from "react";
import { selectIsItemAdded } from "../../redux/contacts/selectors";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "Invalid phone number format (e.g., 459-121-5647)"
    )
    .required("Required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const isItemAdded = useSelector(selectIsItemAdded);

  useEffect(() => {
    if (isItemAdded) {
      toast.success("Contact successfully added!", {
        style: {
          minWidth: "250px",
          borderRadius: 15,
        },
      });
    }
  }, [isItemAdded]);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={(values, actions) => {
          const newContact = { ...values };
          dispatch(addContact(newContact));
          actions.resetForm();
        }}
        validationSchema={validationSchema}
      >
        <Form className={css.contactForm}>
          <div className={css.contactFormInputWrapper}>
            <label htmlFor={nameId}>Name</label>
            <Field
              name="name"
              type="text"
              id={nameId}
              className={css.contactFormInput}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.contactFormError}
            />

            <label htmlFor={numberId}>Number</label>
            <Field
              name="number"
              type="text"
              id={numberId}
              className={css.contactFormInput}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.contactFormError}
            />
          </div>

          <button className={css.contactFormBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
