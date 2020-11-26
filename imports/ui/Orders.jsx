import React from "react";
import { useTracker } from "meteor/react-meteor-data";

import { OrdersCollection } from "/imports/api/OrdersCollection";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Orders = () => {
  const user = useTracker(() => Meteor.user());

  let ownerId;
  if (user) {
    ownerId = user._id;
  }

  const orders = useTracker(() => OrdersCollection.find({ ownerId }).fetch());

  return (
    <>
      <div className="card-container">
        {orders.map((order, index) => (
          <Card key={index} className="col-md-4 card">
            <Card.Title className="card-title">
              Item: {order.itemName}
            </Card.Title>
            <Card.Text>Buyer: {order.buyerName}</Card.Text>
            <Card.Text>Price: {order.price}</Card.Text>
          </Card>
        ))}
      </div>
    </>
  );
};
