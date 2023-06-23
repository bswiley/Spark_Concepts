[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



# Spark-Concepts

## Description
This project is a full stack project that uses node.js, express.js, mysql, sequelize, and handlebars to build up the project.  The project itself is in the same directory as this README.md file for download and use, while a live version is deployed at ([https://spark-concepts-dad483b0ca89.herokuapp.com](#https://spark-concepts-dad483b0ca89.herokuapp.com/)). If the link doesn't work and you wish to use the site in a local server, you can clone the project and deploy it or use it locally.  The purpose of the application is to create an online community for builders or other people who like to create things.  As used in the application a "Ppark" is an idea for a project that can be built or an idea of something a user wants to build.  These ideas can be posted on the site and other users can comment, and/or provide adivice on how to proceed with developing or building the project.  Of course, the application was created by software developers, but the projects may lean in that direction, but the belief beind the idea was to create a community where people who make things can communicate on bringing those ideas into reality.   

## Table of Contents

[Installation](#Installation)

[Usage](#Usage)

[Contributing](#Contributing)

[Tests](#Tests)

[License](#License)

[Questions](#Questions)

## Installation
If one uses the link above, of course, nothing is required for using the application.  Just click the link and begin.  If however, one wants to download the application and run it locally, that person must already have node.js and mysql installed on their system.  Once that is done, they only need to get into the cloned directory with their node.js terminal and then type "npm install."  This should install all the required dependencies locally so that the application can run.  After that is done, one will need to get into mysql and SOURCE the db/schema.sql file. But before that, the .env file needs to be filled out according to your local system.  Mainly what is needed is the username and password for the local copy of mysql.  The database is "spark_db."  There is also an option to use Chatgpt to help generate "Sparks."  To use that function, you will need to have an accont with Chatgpt and an API key for it.  Keys can be created by going to your account and clicking the "personal" menu after you log in and chose the "API" option.  After that is done return to node, run "npm install seed" and then "npm start" to use the application.  The seeds will already include fake database information.  If it's desired to not use the fake data, new data can be used to replace the fake data keeping the original data structure in tact in the "seeds/comment-seeds.js", "seeds/concept-seeds.js", "seeds/favorite-seeds.js", and "seeds/userData.json" files. Finally,  

## Usage
Although it might be desirable to change the data used, using the application after that is relatively easy.  If used locally, after performing the installation steps, all is needed is to pull up a browser and type "localhost:3001/" in the address bar.  From there you can use the application locally.  

## Tests
Other than the testing that went into it during development, there are no pre-prepared tests that we've created to test the application.  

## License
This project has a/n MIT License

## Questions
The full project repository is at https://github.com/bswiley/Spark_Concepts and a deployed copy is athttps://spark-concepts-dad483b0ca89.herokuapp.com.  If you have questions, please email me at bswiley@gmail.com.

## Contributing
If one would like to contribute to the repsitory, also feel free to email me at the address above.  