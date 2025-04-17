const { getPipelineStatus } = require('../../azure/azureDevOps');

module.exports = (app) => {
  app.command('/check-pipeline', async ({ ack, say }) => {
    await ack();
    const status = await getPipelineStatus();
    await say(`🔁 Latest pipeline: ${status.buildNumber} - Status: *${status.status}*`);
  });
};
