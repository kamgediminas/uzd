import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
    history.push("/");
  };

  return (
    <form onSubmit={submit} className="login-form">
      <p htmlFor="username">Username</p>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <p htmlFor="password">Password</p>

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <p>
        <Button type="submit" className="col-md-2">
          Log In
        </Button>
      </p>
    </form>
  );
};
