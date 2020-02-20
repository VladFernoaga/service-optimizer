const cloudant = require("./cloudant-connection");

class CrudAPI {
  insert(callback) {
    console.log("Creating document 'mydoc'");
    // specify the id of the document so you can update and delete it later
    cloudant.use("eas").insert({ a: 1, b: "two" }, function(err, data) {
      if (callback) {
        callback(err, data);
      }
    });
  }
}

module.exports = new CrudAPI();
