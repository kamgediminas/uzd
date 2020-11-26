import React from "react";
import { InsertForm } from "./InsertForm";
import { UserItem } from "./UserItem";
import { Orders } from "./Orders";

export const Dash = () => {
  return (
    <>
      <hr />
      <p>Add new item:</p>
      <InsertForm />
      <br />
      <hr />
      <br />
      <p>Your items:</p>
      <UserItem />
      <br />
      <hr />
      <br />
      <p>Orders from you:</p>
      <Orders />
    </>
  );
};
