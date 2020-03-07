class AiOptimizationApi {
  optimizePricingModelForCustomer(customerID) {
    return {
      oldTariffPlanName: "Standard Small House Plan",
      recommendedPlanName: "Smart House Flexy Plan",
      description: `The Smart Hour Flex Plan offers you more flexibility in charging you EV car at 
            any hour. With just 4 Euro more each week you have one free EV charge at any hour each third day`,
      reasonToChange: `We noticed costly consumption for the EV power supply at hours with high cost per KW`
    };
  }
}

module.exports = new AiOptimizationApi();
