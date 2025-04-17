const { Configuration, OpenAIApi } = require("openai");

module.exports = (app) => {
  app.command('/log-summary', async ({ ack, say, command }) => {
    await ack();
    const logText = command.text;
    const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Summarize these logs:
${logText}` }]
    });

    await say(`📝 Summary: ${response.data.choices[0].message.content}`);
  });
};
