import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const agree = e.target.terms.checked;
    if (agree) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  if (user) {
    navigate("/home");
  }
  const navigateToSignUp = (e) => {
    navigate("/login");
  };
  return (
    <div className="w-75 mx-auto mt-5">
      <h2 className="text-primary text-center">Please Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
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
        <div>
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
            className="me-2 mb-3"
          />
          <label
            className={agree ? "text-primary" : "text-danger"}
            htmlFor="terms"
          >
            Accept Terms and Conditions
          </label>
        </div>
        <Button
          disabled={!agree}
          variant="primary"
          type="submit"
          className="w-50 d-block mx-auto"
        >
          Sign Up
        </Button>
      </Form>
      <p className="text-center">
        Already have an account?
        <span className="text-warning btn btn-link" onClick={navigateToSignUp}>
          Please Login.
        </span>
      </p>
      <SocialLogin />
    </div>
  );
};

export default SignUp;
