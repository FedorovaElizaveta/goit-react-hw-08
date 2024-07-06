import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectFilteredContactsByName,
  selectFilteredContactsByNumber,
} from "../../redux/contacts/selectors";
import { selectFilterField } from "../../redux/filters/selectors";
import { useEffect, useState } from "react";

const ContactList = () => {
  const contactItems = useSelector(selectContacts);
  const contactsByName = useSelector(selectFilteredContactsByName);
  const contactsByNumber = useSelector(selectFilteredContactsByNumber);
  const filterField = useSelector(selectFilterField);
  const [contacts, setContacts] = useState(contactItems);

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
