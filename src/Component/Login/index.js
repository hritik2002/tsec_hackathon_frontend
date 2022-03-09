import React, { useState } from "react";
import "./styles.css";
function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
    userType: "student",
  });
  return (
    <div class="login-page">
      <div class="login-container">
        <form class="login-form">
          <div class="username-info">
            <label for="username">
              <input
                id="username"
                type="text"
                placeholder="Username"
                required
              />
            </label>
          </div>
          <div class="password-info">
            <label for="password">
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </label>
          </div>
          <div class="login-btn">Login</div>
        </form>
      </div>

      <div class="sign-up-container">
        <div class="new-user">
          First time here?{" "}
          <a class="sign-up-text" href="#">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
