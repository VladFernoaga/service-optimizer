const Telegraf = require("telegraf"); // import telegram lib
const cloudantApi = require("./src/cloudant-api");
const aiOptimizationApi = require("./src/ai-optimization-api");
const telegramCredentialsApi = require("./src/telgram-credentials-api");

async function main(args) {
  const customerID = cloudantApi.getLastUpdatedCustomerID();

  const newPricePlan = aiOptimizationApi.optimizePricingModelForCustomer(
    customerID
  );

  // If the optimization engine found a better plan than send a notification with an advice of change
  if (newPricePlan) {
    const credentials = telegramCredentialsApi.getCredentials();

    const bot = new Telegraf(credentials.telegramBotId);

    await bot.telegram
      .sendMessage(
        credentials.userId,
        `<b>Hi Vlad</b>, during monitoring you consumption pattern we want to propose to you a alternative plan!`,
        { parse_mode: "HTML" }
      )
      .catch(err => console.log(err));

    await bot.telegram
      .sendMessage(
        credentials.userId,
        `<b>Old plan:</b> ${newPricePlan.oldTariffPlanName}`,
        { parse_mode: "HTML" }
      )
      .catch(err => console.log(err));

    await bot.telegram
      .sendMessage(
        credentials.userId,
        `<b>Recommended plan:</b> ${newPricePlan.recommendedPlanName}`,
        { parse_mode: "HTML" }
      )
      .catch(err => console.log(err));

    await bot.telegram
      .sendMessage(
        credentials.userId,
        `<b>Reason to change:</b> ${newPricePlan.reasonToChange}`,
        { parse_mode: "HTML" }
      )
      .catch(err => console.log(err));

    await bot.telegram
      .sendMessage(
        credentials.userId,
        `<b> Plan description:</b> ${newPricePlan.description}`,
        { parse_mode: "HTML" }
      )
      .catch(err => console.log(err));

    await bot.telegram
      .sendMessage(
        credentials.userId,
        "Do you want to proceed with the change?",
        {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Accept", callback_data: "ACCEPT" },
                { text: "Decline", callback_data: "DECLINE" }
              ]
            ]
          }
        }
      )
      .catch(err => console.log(err));
  }

  return { result: "CLI updated" };
}

main();

exports.main = main;
