module.exports = (app) => {
  app.command('/restart-service', async ({ ack, say }) => {
    await ack();
    await say('Restarting service... (PowerShell script would be executed)');
  });
};
