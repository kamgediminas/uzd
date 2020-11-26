import React, { useState } from "react";
import { Login } from "./Login.jsx";
import { Register } from "./Register.jsx";
import Button from "react-bootstrap/Button";

export const AuthForm = () => {
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const [authButton, setAuthButton] = useState(true);

  return (
    <>
      {loginForm ? (
        <>
          <Login />
          <Button
            className="col-md-2"
            onClick={() => {
              setLoginForm(false);
              setAuthButton(true);
            }}
          >
            Back
          </Button>
        </>
      ) : null}
      {registerForm ? (
        <>
          <Register />
          <Button
            className="col-md-2"
            onClick={() => {
              setRegisterForm(false);
              setAuthButton(true);
            }}
          >
            Back
          </Button>
        </>
      ) : null}
      {authButton ? (
        <>
          <div className="auth-form">
            <Button
              className="col-md-2"
              onClick={() => {
                setLoginForm(true);
                setAuthButton(false);
              }}
            >
              Login
            </Button>
            <Button
              className="col-md-2"
              onClick={() => {
                setRegisterForm(true);
                setAuthButton(false);
              }}
            >
              Register
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
};
