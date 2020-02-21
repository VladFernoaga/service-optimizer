module.exports = class CustomerData {
  constructor(customerId, equipmentIdentifier, startTime, endTime, consumedKW) {
    this.customerId = customerId;
    this.equipmentIdentifier = equipmentIdentifier;
    this.startTime = startTime;
    this.endTime = endTime;
    this.consumedKW = consumedKW;
  }
};
