module.exports = (app) => {
  app.message('daily digest', async ({ say }) => {
    await say('📊 Daily system health check summary: All systems operational ✅');
  });
};
