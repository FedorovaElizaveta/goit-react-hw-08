import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import DeleteContactModal from "../DeleteContactModal/DeleteContactModal";

const Contact = ({ contact: { name, number, id } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={css.contactCardItem}>
        <div className={css.contactCardContainer}>
          <div className={css.contactCardInfo}>
            <FaUser size={30} />
            <p>{name}</p>
          </div>
          <div className={css.contactCardInfo}>
            <FaPhoneAlt size={30} />
            <p>{number}</p>
          </div>
        </div>
        <button
          onClick={openModal}
          type="button"
          className={css.contactCardBtn}
        >
          Delete
        </button>
      </div>
      {isModalOpen && (
        <DeleteContactModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          name={name}
          id={id}
        />
      )}
    </>
  );
};

export default Contact;
