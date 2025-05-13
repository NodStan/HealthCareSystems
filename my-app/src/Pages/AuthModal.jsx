import React, { useState } from "react";
import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ErrorBoundary from "./ErrorBoundary";  // Import the ErrorBoundary component
import "./AuthModal.css";

export default function AuthModal({ isOpen, onClose, onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
        <AuthHeader isLogin={isLogin} setIsLogin={setIsLogin} onClose={onClose} />
        <div className="auth-modal-body">
          <ErrorBoundary>
            {isLogin ? <LoginForm onSuccess={onSuccess} /> : <RegisterForm />}
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
