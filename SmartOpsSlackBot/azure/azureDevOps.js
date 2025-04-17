const axios = require('axios');

const getPipelineStatus = async () => {
  const url = `${process.env.AZURE_ORG_URL}/${process.env.AZURE_PROJECT_NAME}/_apis/build/builds?api-version=6.0`;
  const auth = Buffer.from(`:${process.env.AZURE_PERSONAL_ACCESS_TOKEN}`).toString('base64');
  
  const response = await axios.get(url, {
    headers: { Authorization: `Basic ${auth}` }
  });
  
  return response.data.value[0];
};

module.exports = { getPipelineStatus };
