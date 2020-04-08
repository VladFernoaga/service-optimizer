module.exports = class CustomerData {
  constructor(
    nlcId,
    customerId,
    equipmentId,
    activePower,
    reactivePower,
    timestamp
  ) {
    this.nlcId = nlcId;
    this.customerId = customerId;
    this.equipmentIdentifier = equipmentId;
    this.timestamp = timestamp;
    this.activePower = activePower;
    this.reactivePower = reactivePower;
  }
};
