class TelegramCredentials {
  getCredentials() {
    return {
      telegramBotId: "<TELEGRAM_BOT_ID>",
      userId: "<VLAD_CHAT_ID>"
    };
  }
}

module.exports = new TelegramCredentials();
