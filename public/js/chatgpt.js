
//require('dotenv').config();
//const { Configuration, OpenAIApi } = require('openai');
import { OpenAI } from "./src/openai/OpenAI.js";

// Function to create a chat completion using OpenAI API
const createChatCompletion = async (event) => {
  const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_Key
  }));

  try {
    console.log("trying the chat gpt thing")
    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Can you describe a project using python (in 500 words)" }],
    }).then(res => {
        console.log(res.data.choices);
        const out = document.getElementById("output");
        out.innerHTML = res.data.choices;
    })
    console.log(response.data.choices);
  } catch (error) {
    console.error(error);
  }
}

/**
 * curl test
 */
const generateFromCurl = async (event) => {
    console.log(`triggered add comment form handler`)
    event.preventDefault();
  
    console.log("chatgpt gen new spark ideas");

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'get',
        body: { "model": "text-davinci-003", "promt": "Can you describe a project using python (in 500 words)"},
        headers: { 'Content-Type': 'application/json', "Authorization": "Bearer "+ process.env.API_Key},
    });
    console.log(response)
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Could not post data');
    }
    
};


document
    .querySelector('.generate-form')
    .addEventListener('submit', generateFromCurl);