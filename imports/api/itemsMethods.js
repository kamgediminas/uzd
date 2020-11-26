import { check } from "meteor/check";
import { ItemsCollection } from "./ItemsCollection";

Meteor.methods({
  "items.insert"(name, price, username) {
    check(name, String);
    check(price, Number);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    ItemsCollection.insert({
      name: name.trim(),
      ownerId: this.userId,
      ownerName: username,
      createdAt: new Date(),
      price: price,
    });
  },

  "items.edit"(id, name, price) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    check(name, String);
    check(price, Number);

    ItemsCollection.update(id, {
      $set: {
        name,
        price,
      },
    });
  },

  "items.remove"(id) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    ItemsCollection.remove(id);
  },
});
