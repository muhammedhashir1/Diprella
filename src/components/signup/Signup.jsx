import React from "react";
import logo from "../../assets/unnamed.png";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.signup_container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logoImg} />
      </div>
      <div className={styles.content}>
        <div className={styles.welcome_section}>
          <div className={styles.title}>Welcome Back!</div>
          <div className={styles.description}>
            To keep connected with us please <br />
            login with your personal info
          </div>
          <button className={styles.signinBtn}>Signin</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
