const Subject = require("rxjs").Subject;
const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");
const ConsumerData = require("../infrastructure-connector/consumer-data.model");

function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
}

class DataFeederService {
  constructor() {
    this.consumptionEvent = new Subject();
  }

  async startEventGeneration() {
    readXlsxFile(fs.createReadStream(`resources/consumer_data.xlsx`)).then(
      rows => {
        createEvents(rows.slice(1), this);
      }
    );
  }
}

async function createEvents(rows, dataProvider) {
  for (let i = 0; i < rows.length; i++) {
    const nlcId = rows[i][1];
    const customerId = rows[i][2];
    const equipmentId = rows[i][3];
    const activePower = rows[i][4];
    const reactivePower = rows[i][5];

    dataProvider.consumptionEvent.next(
      new ConsumerData(
        nlcId,
        customerId,
        equipmentId,
        activePower,
        reactivePower,
        new Date()
      )
    );
    console.log(`Event number ${i} was generated`);
    await timer(2000);
  }
}
module.exports = new DataFeederService();
