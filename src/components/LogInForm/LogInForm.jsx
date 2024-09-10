import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import icons from "../../assets/sprite.svg";
import { useState } from "react";

const LogInForm = () => {
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
      <form onSubmit={handleSubmit(submitForm)}>
        <h2>Log In</h2>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
        <button type="submit" onClick={() => console.log("close")}>
          <svg width={32} height={32}>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </button>
        <div>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
          <input
            {...register("password", { required: true })}
            placeholder="Passwword"
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword === false ? (
              <svg width={20} height={20}>
                <use href={`${icons}#icon-eye`}></use>
              </svg>
            ) : (
              <svg width={20} height={20}>
                <use href={`${icons}#icon-eye-off`}></use>
              </svg>
            )}
          </button>
          {errors.password?.message && <p>{errors.password?.message}</p>}
        </div>
        <button
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
