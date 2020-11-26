import React, { useState } from "react";
import { ItemsCollection } from "/imports/api/ItemsCollection";
import { useTracker } from "meteor/react-meteor-data";
import Button from "react-bootstrap/Button";

import swal from "sweetalert";

export const InsertForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const user = useTracker(() => Meteor.user());

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !price) return;

    // ItemsCollection.insert({
    //   name: name.trim(),
    //   ownerId: user._id,
    //   ownerName: user.username,
    //   createdAt: new Date(),
    //   price: price,
    // });
    const username = user.username;
    Meteor.call("items.insert", name, price, username);
    setName("");
    setPrice("");
    swal(`Successfully inserted.`);
  };

  return (
    <form className="insert-form" onSubmit={submitHandler}>
      <p>Item Name:</p>
      <input
        type="text"
        placeholder=""
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <br />
      <br />
      <p>Item Price:</p>
      <input
        type="text"
        placeholder=""
        value={price}
        pattern="[0-9]*"
        onChange={(e) => {
          if (e.target.validity.valid) {
            setPrice(parseInt(e.currentTarget.value));
          }
        }}
      />
      <br />
      <br />

      <Button type="submit">Add Item</Button>
    </form>
  );
};
