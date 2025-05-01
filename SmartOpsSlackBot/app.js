require('dotenv').config();
const { App } = require('@slack/bolt');
const azureDevOps = require('./azure/azureDevOps');
const checkPipeline = require('./bot/commands/checkPipeline');
const restartService = require('./bot/commands/restartService');
const logSummary = require('./bot/commands/logSummary');
const dailyDigest = require('./bot/commands/dailyDigest');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

checkPipeline(app);
restartService(app);
logSummary(app);
dailyDigest(app);

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('SmartOps Slack Bot is running!');
})();
