import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { ItemsCollection } from "/imports/api/ItemsCollection";
import { OrdersCollection } from "/imports/api/OrdersCollection";
import "/imports/api/itemsMethods";
import "/imports/api/ordersMethods";

const insertItem = (itemName) => ItemsCollection.insert({ name: itemName });

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  // account seed
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
