import { check } from "meteor/check";
import { OrdersCollection } from "./OrdersCollection";

Meteor.methods({
  "orders.add"(item, username) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    OrdersCollection.insert({
      itemId: item._id,
      itemName: item.name,
      ownerId: item.ownerId,
      ownerName: item.ownerName,
      buyerName: username,
      price: item.price,
      createdAt: new Date(),
    });
  },
});
