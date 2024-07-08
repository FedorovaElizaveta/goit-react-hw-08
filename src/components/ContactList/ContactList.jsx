import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectFilteredContactsByName,
  selectFilteredContactsByNumber,
  selectIsItemDeleted,
} from "../../redux/contacts/selectors";
import { selectFilterField } from "../../redux/filters/selectors";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const ContactList = () => {
  const contactItems = useSelector(selectContacts);
  const contactsByName = useSelector(selectFilteredContactsByName);
  const contactsByNumber = useSelector(selectFilteredContactsByNumber);
  const filterField = useSelector(selectFilterField);
  const [contacts, setContacts] = useState(contactItems);

  const isItemDeleted = useSelector(selectIsItemDeleted);
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (isItemDeleted && !toastShownRef.current) {
      toast.success("Contact successfully deleted!", {
        style: {
          minWidth: "250px",
          borderRadius: 15,
        },
      });
      toastShownRef.current = true;
    } else if (!isItemDeleted) {
      toastShownRef.current = false;
    }
  }, [isItemDeleted]);

  useEffect(() => {
    if (filterField === "name") {
      setContacts(contactsByName);
    } else if (filterField === "number") {
      setContacts(contactsByNumber);
    } else {
      setContacts(contactItems);
    }
  }, [contactItems, contactsByName, contactsByNumber, filterField]);

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
