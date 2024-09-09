import styles from "./HeaderBtn.module.css";
const HeaderBtn = () => {
  return (
    <div>
      <button
        className={styles.loginBtn}
        type="button"
        onClick={() => {
          console.log("login");
        }}
      >
        Log In
      </button>
      <button
        className={styles.registrBtn}
        type="button"
        onClick={() => {
          console.log("registration");
        }}
      >
        Registration
      </button>
    </div>
  );
};

export default HeaderBtn;
