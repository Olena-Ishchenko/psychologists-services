import ReactModal from "react-modal";
import styles from "./ModalContainer.module.css";

const ModalContainer = ({ modalIsOpen = false, onChange, children }) => {
  ReactModal.setAppElement(document.getElementById("root"));

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => onChange(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      overlayClassName={styles.overlay}
      className={styles.modalContainer}
    >
      <div>{children}</div>
    </ReactModal>
  );
};

export default ModalContainer;
