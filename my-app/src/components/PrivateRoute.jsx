import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import AuthModal from '../Pages/AuthModal'; // Update path if needed

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const [signinOpen, setSigninOpen] = useState(false);

  const openSignin = () => setSigninOpen(true);
  const closeSignin = () => setSigninOpen(false);

  if (!isAuthenticated) {
    if (!signinOpen) openSignin();

    return (
      <>
        {signinOpen && (
          <div className="signin-overlay">
            <AuthModal
              isOpen={signinOpen}
              onClose={closeSignin}
              onSuccess={closeSignin}
            />
          </div>
        )}
      </>
    );
  }

  return element;
};

export default PrivateRoute;
