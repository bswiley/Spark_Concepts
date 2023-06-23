async function createChatCompletion(string) {

    require('dotenv').config();
    const { Configuration, OpenAIApi } = require('openai');
    // Function to create a chat completion using OpenAI API
  
    const openai = new OpenAIApi(new Configuration({
        apiKey: process.env.API_KEY
    }));
    try {
        console.log("waiting for openai to create chat thing")
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: string }],
        });
        //console.log(response.toJSON());
        console.log("done");
        console.log(response.data.choices[0].message.content)
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
    }
  
};

module.exports = createChatCompletion;