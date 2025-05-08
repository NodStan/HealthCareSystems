import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import OAuthButtons from "./0AuthButtons";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function LoginForm() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");

      // Email validation
      if (!email.includes("@")) {
        setError("Email is missing '@' symbol.");
        setPopupVisible(true);
        return;
      }

      if (!email.endsWith(".com")) {
        setError("Email must end with '.com'.");
        setPopupVisible(true);
        return;
      }

      const domain = email.split("@")[1];
      if (domain !== "gmail.com" && domain !== "yahoo.com") {
        setError("Email must be a Gmail or Yahoo address.");
        setPopupVisible(true);
        return;
      }

      if (password.length < 8) {
        setError("Password must be at least 8 characters long.");
        setPopupVisible(true);
        return;
      }

      if (!/\d/.test(password)) {
        setError("Password must include at least one number.");
        setPopupVisible(true);
        return;
      }

      if (!/[!@#$%^&*]/.test(password)) {
        setError("Password must include at least one special character (!@#$%^&*).");
        setPopupVisible(true);
        return;
      }

      const success = signIn(email, password);
      if (!success) {
        setError("Invalid email or password.");
        setPopupVisible(true);
      }
    } catch (err) {
      setError("Failed to sign in. Please check your credentials and try again.");
      setPopupVisible(true);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
    setError("");
  };

  const handleGoogleSuccess = (response) => {
    const token = response.credential;
    console.log("Google login successful, token:", token);
  };

  const handleGoogleError = (error) => {
    console.error("Google login error:", error);
  };

  return (
    <>
      {popupVisible && (
        <div className="popup-error">
          <RiCloseLine
            size={24}
            onClick={closePopup}
            color="white"
            className="close-btn"
          />
          <p>{error}</p>
        </div>
      )}

      <GoogleOAuthProvider clientId="756651798489-18r5dpc8npf1lrig3570quqbg0u6q3f0.apps.googleusercontent.com">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group password-wrapper">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-container">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </span>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input type="checkbox" name="remember-me" className="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </div>

          <button type="submit" className="submit-button">
            Sign In
          </button>

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
          />
        </form>
      </GoogleOAuthProvider>
    </>
  );
}
