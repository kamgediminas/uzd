import React from "react";
import { useTracker } from "meteor/react-meteor-data";

import { ItemsCollection } from "/imports/api/ItemsCollection";
import { OrdersCollection } from "/imports/api/OrdersCollection";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import swal from "sweetalert";

export const EveryItem = (item) => {
  const items = useTracker(() => ItemsCollection.find({}).fetch());
  const user = useTracker(() => Meteor.user());

  const buyHandler = (item) => {
    if (!user) {
      return swal("You must login first!");
    }

    Meteor.call("orders.add", item, user.username);
    swal(`You successfully bought ${item.name}.`);
  };

  return (
    <>
      <hr />
      <p>All items:</p>
      <div className="card-container">
        {items.map((item, index) => (
          <Card key={index} className="col-md-4 card">
            <Card.Title className="card-title">Item: {item.name}</Card.Title>
            <Card.Text>Owner: {item.ownerName}</Card.Text>
            <Card.Text>Price: {item.price}</Card.Text>
            <Button className="button" onClick={(e) => buyHandler(item)}>
              Buy
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
};
