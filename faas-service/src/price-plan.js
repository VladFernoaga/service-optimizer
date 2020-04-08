module.exports = class PricePlan {
  constructor(
    oldTariffPlanName,
    recommendedPlanName,
    description,
    reasonToChange
  ) {
    this.oldTariffPlanName = oldTariffPlanName;
    this.recommendedPlanName = recommendedPlanName;
    this.description = description;
    this.reasonToChange = reasonToChange;
  }
};
