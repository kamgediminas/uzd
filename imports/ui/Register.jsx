import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const submit = () => {
    Accounts.createUser({
      username: username,
      password: password,
    });
    history.push("/");
  };

  return (
    <form onSubmit={submit} className="login-form">
      <p>Username: </p>
      <input
        type=""
        name="email"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <p>Password: </p>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <p>
        <Button type="submit" value="Register" className="col-md-2">
          Register
        </Button>
      </p>
    </form>
  );
};
