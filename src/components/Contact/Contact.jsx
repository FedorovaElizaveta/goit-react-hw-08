import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import DeleteContactModal from "../DeleteContactModal/DeleteContactModal";
import { useState } from "react";

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
// import css from "./Contact.module.css";
// import { FaUser, FaPhoneAlt } from "react-icons/fa";
// import { useEffect, useRef, useState } from "react";
// import DeleteContactModal from "../DeleteContactModal/DeleteContactModal";
// import { useSelector } from "react-redux";
// import { selectIsItemDeleted } from "../../redux/contacts/selectors";
// import toast from "react-hot-toast";

// const Contact = ({ contact: { name, number, id } }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const isItemDeleted = useSelector(selectIsItemDeleted);
//   const toastShownRef = useRef(false);

//   useEffect(() => {
//     if (isItemDeleted && !toastShownRef.current) {
//       toast.success("Contact successfully deleted!", {
//         style: {
//           minWidth: "250px",
//           borderRadius: 15,
//         },
//       });
//       toastShownRef.current = true;
//     } else if (!isItemDeleted) {
//       toastShownRef.current = false;
//     }
//   }, [isItemDeleted]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div className={css.contactCardItem}>
//         <div className={css.contactCardContainer}>
//           <div className={css.contactCardInfo}>
//             <FaUser size={30} />
//             <p>{name}</p>
//           </div>
//           <div className={css.contactCardInfo}>
//             <FaPhoneAlt size={30} />
//             <p>{number}</p>
//           </div>
//         </div>
//         <button
//           onClick={openModal}
//           type="button"
//           className={css.contactCardBtn}
//         >
//           Delete
//         </button>
//       </div>
//       {isModalOpen && (
//         <DeleteContactModal
//           isModalOpen={isModalOpen}
//           closeModal={closeModal}
//           name={name}
//           id={id}
//         />
//       )}
//     </>
//   );
// };

// export default Contact;
