import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, onClose, position = 'top-center' }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // auto-close after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${position}`}>
      {message}
    </div>
  );
};

export default Toast;
