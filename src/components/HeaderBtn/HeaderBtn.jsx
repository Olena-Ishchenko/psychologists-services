import ModalContainer from "../ModalContainer/ModalContainer";
import LogInForm from "../LogInForm/LogInForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import styles from "./HeaderBtn.module.css";
import { useState } from "react";
const HeaderBtn = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isReg, setIsReg] = useState(false);

  const openModal = (login = false, reg = false) => {
    console.log(123);

    setIsOpenModal(true);
    setIsLogin(login);
    setIsReg(reg);
  };

  const closeModal = (isOpen) => {
    setIsOpenModal(isOpen);
  };

  return (
    <div>
      <button
        className={styles.loginBtn}
        type="button"
        onClick={() => openModal(true)}
      >
        Log In
      </button>
      <button
        className={styles.registrBtn}
        type="button"
        onClick={() => openModal(false, true)}
      >
        Registration
      </button>
      <ModalContainer
        modalIsOpen={isOpenModal}
        onChange={() => closeModal(false)}
      >
        {isLogin && <LogInForm closeForm={() => closeModal(false)} />}
        {isReg && <RegistrationForm closeForm={() => closeModal(false)} />}
      </ModalContainer>
    </div>
  );
};

export default HeaderBtn;
