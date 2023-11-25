import React from "react";
import { useForm } from "react-hook-form";
import { FaGooglePlusG, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import styles from "./Create.module.css";

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.create_container}>
      <div className={styles.create}>
        {/** Title */}
        <div className={styles.title}>Create Account</div>
        {/** Social Logos */}
        <div className={styles.create_logo}>
          <span className={styles.logo}>
            <FaFacebookF />
          </span>
          <span className={styles.logo}>
            <FaGooglePlusG />
          </span>
          <span className={styles.logo}>
            <FaLinkedin />
          </span>
        </div>

        {/** Registration Message */}
        <p className={styles.registration}>or use your email for registration:</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.create_inputFields}>
            {/* Name Input */}
            <div className={styles.inputDiv}>
              <CgProfile />
              <input
                type="text"
                placeholder="Name"
                className={styles.nameInput}
                {...register("name", {
                  required: "*Name is required",
                  minLength: { value: 4, message: "*Name must be at least 4 characters" },
                  maxLength: { value: 20, message: "*Name cannot exceed 20 characters" },
                })}
              />
            </div>
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}

            {/* Email Input */}
            <div className={styles.inputDiv}>
              <MdEmail />
              <input
                type="email"
                placeholder="Email"
                className={styles.emailInput}
                {...register("email", {
                  required: "*Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}

            {/* Password Input */}
            <div className={styles.inputDiv}>
              <RiLockPasswordFill />
              <input
                type="password"
                placeholder="Password"
                className={styles.pswInput}
                {...register("password", {
                  required: "*Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z]).+$/,
                    message: "Password must contain at least one capital letter",
                  },
                })}
              />
            </div>
            {errors.password && <p className={styles.error}>{errors.password.message}</p>}

            {/* Submit Button */}
            <div className={styles.btndiv}>
              <button className={styles.btn} type="submit" disabled={Object.keys(errors).length > 0}>
                SIGN UP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
