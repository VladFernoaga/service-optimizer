require("./config/vars");

console.log(`##### EAS service started #####`);

const crudAPI = require("./cloudant/cloudant-api");
const cloudant = require("./cloudant/cloudant-connection");

cloudant.db.list(function(err, body) {
  console.log("List db");
  body.forEach(function(db) {
    console.log(db);
  });
});

crudAPI.insert();
