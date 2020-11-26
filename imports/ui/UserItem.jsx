import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";

import { ItemsCollection } from "/imports/api/ItemsCollection";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const UserItem = () => {
  const [edit, setEdit] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [id, setId] = useState(undefined);

  const user = useTracker(() => Meteor.user());

  const removeHandler = (item) => {
    Meteor.call("items.remove", item._id);
  };
  const editHandler = () => {
    Meteor.call("items.edit", id, name, price);
  };

  let ownerId;
  if (user) {
    ownerId = user._id;
  }

  const items = useTracker(() => ItemsCollection.find({ ownerId }).fetch());

  return (
    <>
      <div className="card-container">
        {items.map((item, index) => (
          <Card key={index} className="col-md-4 card">
            {edit === index ? (
              <>
                <Card.Text className="card-title">
                  Item:{" "}
                  <input
                    type="text"
                    defaultValue={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </Card.Text>
                <Card.Text>
                  Price:{" "}
                  <input
                    pattern="[0-9]*"
                    type="text"
                    defaultValue={price}
                    onChange={(e) => {
                      if (e.target.validity.valid) {
                        setPrice(parseInt(e.currentTarget.value));
                      }
                    }}
                  />
                </Card.Text>
                <Button
                  className="button"
                  onClick={(e) => {
                    editHandler();
                    setEdit(undefined);
                  }}
                >
                  Edit
                </Button>
                <Button className="button" onClick={() => setEdit(undefined)}>
                  Back
                </Button>{" "}
              </>
            ) : (
              <>
                <Card.Title className="card-title">
                  Item: {item.name}
                </Card.Title>
                <Card.Text>Price: {item.price}</Card.Text>
                <Button
                  className="button"
                  onClick={() => {
                    setEdit(index);
                    setName(item.name);
                    setPrice(item.price);
                    setId(item._id);
                  }}
                >
                  Edit
                </Button>{" "}
                <Button
                  className="button"
                  variant="danger"
                  onClick={() => {
                    removeHandler(item);
                  }}
                >
                  Delete
                </Button>
              </>
            )}
          </Card>
        ))}
      </div>
    </>
  );
};
