res.render('spark', {
    concepts,
    logged_in: req.session.logged_in,
  });



  const axios = require('axios');

async function makeChatRequest(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    messages: [
        {"role": "system", "content": "You are ChatGPT, a large language model trained by OpenAI."},
        {"role": "user", "content": prompt},
      ],
    model: 'gpt-3.5-turbo', 
       max_tokens: 50,  // Adjust the max_tokens parameter based on your requirements
      temperature: 0.7,  // Adjust the temperature parameter based on your requirements
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.API_Key,  
      },
    });
    console.log(response.choices[0].content);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}
// Call the function with your prompt
makeChatRequest('create the description of a woodworking project in 500 words or less');



require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_Key
}))

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: string}],
    })
.then(res=> {
    console.log(res.data.choices)
})

console.log('Bearer ' + process.env.API_Key);