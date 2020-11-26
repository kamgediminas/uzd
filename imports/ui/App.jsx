import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

import { EveryItem } from "./EveryItem";
import { Dash } from "./Dash";
import { AuthForm } from "./AuthForm.jsx";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const history = useHistory();

  const logout = () => {
    Meteor.logout();
  };

  return (
    <Router>
      <Nav className=" navigation">
        {user ? (
          <>
            <Nav.Item className="col-3">
              <p>Hello, {user.username}!</p>
            </Nav.Item>

            <Nav.Item className="col-3">
              <Link to="/">Home</Link>
            </Nav.Item>

            <Nav.Item className="col-3">
              <Link to="/dash">Dashboard</Link>
            </Nav.Item>
            <Nav.Item className="col-3">
              <a href="" className="user" onClick={logout}>
                Logout
              </a>
            </Nav.Item>
          </>
        ) : (
          <>
            <Nav className="justify-content-center">
              <Nav.Item className="col-6">
                <Link to="/">Home</Link>
              </Nav.Item>

              <Nav.Item className="col-6">
                <Link to="/login">Login</Link>
              </Nav.Item>
            </Nav>
          </>
        )}
      </Nav>
      <Switch>
        <Route path="/login">
          <AuthForm />
        </Route>
        <Route path="/dash">{user ? <Dash /> : null}</Route>
        <Route path="/">
          <EveryItem />
        </Route>
      </Switch>
    </Router>
  );
};
