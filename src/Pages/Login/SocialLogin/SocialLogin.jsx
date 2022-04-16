import React from "react";
import google from "../../../images/icon/google.png";
import facebook from "../../../images/icon/facebook.png";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50"></div>
      </div>
      <div>
        <button className="btn btn-outline-primary w-50 mx-auto d-block mb-3">
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
