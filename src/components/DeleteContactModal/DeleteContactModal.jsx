import css from "./DeleteContactModal.module.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

Modal.setAppElement("#root");

const DeleteContactModal = ({ isModalOpen, closeModal, name, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 15,
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.80)",
    },
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Selected Contact"
    >
      <div className={css.deleteModal}>
        <p>Are you sure you want to delete contact {name}?</p>
        <ul className={css.deleteOptionsList}>
          <li className={css.deleteOptionsItem}>
            <button onClick={closeModal} className={css.deleteOptionsBtn}>
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleDelete} className={css.deleteOptionsBtn}>
              Delete
            </button>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default DeleteContactModal;
