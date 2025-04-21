import React from "react";
import { RiGoogleLine } from "react-icons/ri";
import { MdFacebook } from "react-icons/md";

export default function OAuthButtons() {
  return (
    <div>
      <div className="oauth-divider">
        <span>Or sign in with</span>
      </div>
      <div className="oauth-buttons">
        <button type="button" className="oauth-button">
          <RiGoogleLine size={20} color="light gray" />
          <span className="sr-only">Sign in with Google</span>
        </button>
        <button type="button" className="oauth-button">
          <MdFacebook size={20} color="gray" />
          <span className="sr-only">Sign in with Facebook</span>
        </button>
      </div>
    </div>
  );
}
