import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import icons from "../../assets/sprite.svg";
import { useState } from "react";
import styles from "./LogInForm.module.css";

const LogInForm = ({ closeForm }) => {
  const [showPassword, setShowPassword] = useState(false);

  const schemaValidation = Yup.object({
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(25, "Too long")
      .required("Password is required"),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const submitForm = () => {
    console.log("log");
    reset();
  };

  return (
    <div>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(submitForm)}
      >
        <h2 className={styles.formTitle}>Log In</h2>
        <p className={styles.formText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
        <button
          className={styles.formCloseBtn}
          type="submit"
          onClick={closeForm}
        >
          <svg className={styles.formCloseBtnIcon} width={32} height={32}>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </button>
        <div className={styles.formInputContainer}>
          <input
            className={styles.formInput}
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
          <div className={styles.formInputPassword}>
            <input
              className={styles.formInput}
              {...register("password", { required: true })}
              placeholder="Password"
            />
            <button
              className={styles.formPasswordHiddenBtn}
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword === false ? (
                <svg
                  className={styles.formPasswordHidden}
                  width={20}
                  height={20}
                >
                  <use href={`${icons}#icon-eye`}></use>
                </svg>
              ) : (
                <svg
                  className={styles.formPasswordHidden}
                  width={20}
                  height={20}
                >
                  <use href={`${icons}#icon-eye-off`}></use>
                </svg>
              )}
            </button>

            {errors.password?.message && <p>{errors.password?.message}</p>}
          </div>
        </div>
        <button
          className={styles.formSubmitBtn}
          type="submit"
          onClick={() => {
            console.log("login");
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
