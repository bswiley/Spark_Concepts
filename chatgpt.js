require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_Key
}))

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Can you describe a project using python (in 500 words)"}],
    })
.then(res=> {
    console.log(res.data.choices)
})



console.log('Bearer ' + process.env.API_Key);

