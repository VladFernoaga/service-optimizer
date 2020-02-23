const cloudant = require("./cloudant-connection");

class CrudAPI {
  insert(data) {
    console.log("Inserting next consumption point");
    // specify the id of the document so you can update and delete it later
    cloudant.use("eas").insert(data, function(err, data) {});
  }
}

module.exports = new CrudAPI();
