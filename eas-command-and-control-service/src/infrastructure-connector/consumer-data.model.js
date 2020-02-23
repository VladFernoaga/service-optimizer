module.exports = class CustomerData {
  constructor(
    customerId,
    equipmentIdentifier,
    activePower,
    reactivePower,
    timestamp
  ) {
    this.customerId = customerId;
    this.equipmentIdentifier = equipmentIdentifier;
    this.timestamp = timestamp;
    this.activePower = activePower;
    this.reactivePower = reactivePower;
  }
};
