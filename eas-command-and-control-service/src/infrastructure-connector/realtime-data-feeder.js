const crudAPI = require("../cloudant/cloudant-api");

class DataFeeder {
  constructor(dataProvider) {
    this.dataProvider = dataProvider;
    dataProvider.subscribe(consumerData => {
      handleConsumerData(consumerData);
    });
  }
}

function handleConsumerData(consumerData) {
  crudAPI.insert(consumerData);
}

module.exports = DataFeeder;
