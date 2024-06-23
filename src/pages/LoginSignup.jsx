import React from "react";
import styles from './CSS/LoginSignup.module.css'
import { FaGoogle,FaApple } from "react-icons/fa";

function LoginSignup() {
  return <div className={styles.LoginSignup}>
    <div className={styles.Login_container}>
      <h1>Login to Your Account👏</h1>
      <div className={styles.social_login}>
        <div><span><FaGoogle/></span> <span>Use Google</span></div>
        <div><span><FaApple/></span> <span>Use Apple</span></div>
      </div>
      <div className={styles.or}>
        <h3>Or</h3>
      </div>
      <div className={styles.login_form}>
        <div className={styles.inputs}>
          <label>Email:</label>
          <input type="text"  placeholder="Your Email" />
        </div>
         <div className={styles.inputs}>
          <label>Password:</label>
          <input type="text"  placeholder="Enter your Password" />
        </div>
        <div>
         <button className={styles.login_btn}>Login</button>
        </div>
        <div className={styles.resetCreate}>
          <p>Reset Password</p>
          <p>Don't have an account</p>
        </div>
      </div>
      </div>    
  </div>;
}

export default LoginSignup;
