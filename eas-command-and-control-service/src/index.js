require("./config/vars");

console.log(`##### EAS service started #####`);

const feederEventSimulator = require("./simulator/data-feeder-simulator-service");

const DataFeeder = require("./infrastructure-connector/realtime-data-feeder");
const realtimeDataFeeder = new DataFeeder(
  feederEventSimulator.consumptionEvent
);

feederEventSimulator.startEventGeneration().then(() => {});
