import React from "react";
import google from "../../../images/icon/google.png";
import facebook from "../../../images/icon/facebook.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          className="btn btn-outline-primary w-50 mx-auto d-block mb-3"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <img style={{ width: "20px" }} src={google} alt="" />{" "}
          <span className="px-2">Sign In With Google</span>
        </button>
        <button className="btn btn-outline-primary w-50 mx-auto d-block">
          <img style={{ width: "20px" }} src={facebook} alt="" />{" "}
          <span className="px-2">Sign In With Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
