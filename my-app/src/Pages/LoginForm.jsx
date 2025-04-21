import React from "react";
import OAuthButtons from "./0AuthButtons";

export default function LoginForm() {
  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input id="email" name="email" type="email" required className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input id="password" name="password" type="password" required className="form-input" />
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

      <OAuthButtons />
    </form>
  );
}
