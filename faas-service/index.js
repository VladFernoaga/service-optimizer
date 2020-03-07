const Telegraf = require("telegraf"); // import telegram lib
const cloudantApi = require("./src/cloudant-api");
const aiOptimizationApi = require("./src/ai-optimization-api");
const telegramCredentialsApi = require("./src/telgram-credentials-api");

function main(args) {
  const customerID = cloudantApi.getLastUpdatedCustomerID();

  const newPricePlan = aiOptimizationApi.optimizePricingModelForCustomer(
    customerID
  );

  // If the optimization engine found a better plan than send a notification with an advice of change
  if (newPricePlan) {
    const credentials = telegramCredentialsApi.getCredentials();

    const bot = new Telegraf(credentials.telegramBotId);

    bot.telegram
      .sendMessage(
        credentials.userId,
        `Monitoring you consumptions pattern we want
       to propose to you a alternative plan`
      )
      .catch(err => console.log(err));

    bot.telegram
      .sendMessage(
        credentials.userId,
        `Old plan: ${newPricePlan.oldTariffPlanName}`
      )
      .catch(err => console.log(err));

    bot.telegram
      .sendMessage(
        credentials.userId,
        `Recommended plan: ${newPricePlan.recommendedPlanName}`
      )
      .catch(err => console.log(err));

    bot.telegram
      .sendMessage(
        credentials.userId,
        `Reason to change: ${newPricePlan.reasonToChange}`
      )
      .catch(err => console.log(err));

    bot.telegram
      .sendMessage(
        credentials.userId,
        `Plan description: ${newPricePlan.description}`
      )
      .catch(err => console.log(err));
  }

  return { result: "CLI updated" };
}

main();

exports.main = main;
