function myAction(args) {
  console.log("Console log form vlad");
  const Telegraf = require("telegraf"); // import telegram lib
  const bot = new Telegraf("<TELEGRAM_BOT_ID>"); // get the token from envirenment variable
  bot.telegram
    .sendMessage("<VLAD_CHAT_ID>", "hehe vlad is here")
    .catch(err => console.log(err));
  return { result: "CLI updated" };
}

exports.main = myAction;
