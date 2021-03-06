import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmilAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmilAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const navigateToSignUp = (e) => {
    navigate("/signup");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };
  return (
    <div className="w-75 mx-auto mt-5">
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-50 d-block mx-auto"
        >
          Login
        </Button>
      </Form>
      <p className="text-center">
        New to Genius Car?
        <span className="text-warning btn btn-link" onClick={navigateToSignUp}>
          Please Register.
        </span>
      </p>
      <p className="text-center">
        Forgot Password?
        <span className="text-primary btn btn-link" onClick={resetPassword}>
          Reset Password
        </span>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
