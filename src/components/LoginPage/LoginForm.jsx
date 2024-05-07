import React from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";


const LoginForm = () => {
  return (
    <div className="all">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required></input>
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required></input>
          <FaLock className="icon" />
        </div>
        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Dont have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
    </div>

  );
};

export default LoginForm;
