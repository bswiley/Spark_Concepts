require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

// Function to create a chat completion using OpenAI API
async function createChatCompletion(string) {
  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_Key
  }));

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: string }],
    });
    console.log(response.data.choices);
  } catch (error) {
    console.error(error);
  }
}

console.log('Bearer ' + process.env.API_Key);

module.exports = createChatCompletion;