import React, { useState } from "react";
import styles from './CSS/LoginSignup.module.css';
import { FaGoogle, FaApple } from "react-icons/fa";

function LoginSignup() {
  const [state, setState] = useState("login"); 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const logIn = async () => {
    console.log("Login function executed!", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: 'POST',
      headers: {
        Accept: "application/form-data",
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData),
    }).then(res => res.json()).then((data) => {
      responseData = data;
      console.log("Response Data:", responseData);
    });
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signUp = async () => {
    console.log("Sign up function executed!", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: 'POST',
      headers: {
        Accept: "application/form-data",
        "Content-type": "application/json"
      },
      body: JSON.stringify(formData),
    }).then(res => res.json()).then((data) => {
      responseData = data;
      console.log("Response Data:", responseData);
    });
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Proceed with login or signup
    if (state === "login") {
      logIn();
    } else {
      signUp();
    }
  };

  return (
    <div className={styles.LoginSignup}>
      <div className={styles.Login_container}>
        <h1>{state === "login" ? "Login to Your Account" : "Create Your Account"} 👏</h1>
        <div className={styles.social_login}>
          <div><span><FaGoogle /></span> <span>Use Google</span></div>
          <div><span><FaApple /></span> <span>Use Apple</span></div>
        </div>
        <div className={styles.or}>
          <h3>Or</h3>
        </div>

        <form className={styles.login_form} onSubmit={handleSubmit}>
          {state === "signup" && (
            <div className={styles.inputs}>
              <label htmlFor="username">Name:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your Name"
                required
                value={formData.username}
                onChange={changeHandler}
              />
            </div>
          )}
          <div className={styles.inputs}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              required
              value={formData.password}
              onChange={changeHandler}
            />
          </div>
          <div>
            <button className={styles.login_btn} type="submit">
              {state === "signup" ? "Sign Up" : "Login"}
            </button>
          </div>
          <div className={styles.resetCreate}>
            <p
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setState(state === "login" ? "signup" : "login");
              }}
            >
              {state === "login" ? "Don't have an account? Sign up here." : "Already have an account? Log in here."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
