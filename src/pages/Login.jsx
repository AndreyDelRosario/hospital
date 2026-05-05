import { useState } from "react";
import "./Login.css";
import mainLogo from "../assets/icons/mainLogo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">

      {/* LEFT LOGO */}
      <img src={mainLogo} className="left-logo" alt="logo" />
      <img src={mainLogo} className="right-logo" alt="logo" />

      {/* LOGIN FORM CENTER */}
      <div className="login-form">

        <h2 className="title">Log in</h2>

        <input
          type="text"
          placeholder="👤 User_ID"
          className="input"
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="🔒 Password"
            className="password-input"
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#">Forgot password?</a>
        </div>

        <button className="login-btn">Log in</button>

        <h6 className="signup">
          or <a href="#">Sign up</a>
        </h6>

      </div>
    </div>
  );
}

export default Login;