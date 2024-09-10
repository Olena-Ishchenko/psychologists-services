import ReactModal from "react-modal";
// import icons from "../../assets/sprite.svg";

const ModalContainer = ({ modalIsOpen = false, onChange, child }) => {
  ReactModal.setAppElement(document.getElementById("root"));

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => onChange(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      <div></div>
    </ReactModal>
  );
};

export default ModalContainer;
