class AiOptimizationApi {
  optimizePricingModelForCustomer(customerID) {
    return {
      oldTariffPlanName: "Standard Small House Plan",
      recommendedPlanName: "Smart House Flexy Plan",
      description: `The Smart Hour Flex Plan offers you more flexibility in charging you EV car at any hour. With just <b>4 Euro</b> more you have one <b>free EV charge at any hour each third day</b>`,
      reasonToChange: `We noticed costly consumption for the EV power supply at hours with high cost per KW`
    };
  }
}

module.exports = new AiOptimizationApi();
