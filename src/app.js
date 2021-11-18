const TelegramBot = require("node-telegram-bot-api");
const { TOKEN } = require("../config.js");

const bot = new TelegramBot(TOKEN, {
  polling: true,
});

bot.on("message", async (message) => {
  console.log(message);
});
