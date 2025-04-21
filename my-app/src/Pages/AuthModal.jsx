import React, { useState } from "react";
import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./AuthModal.css";

export default function AuthModal() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-container">
        <AuthHeader isLogin={isLogin} setIsLogin={setIsLogin} />
        <div className="auth-modal-body">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}

