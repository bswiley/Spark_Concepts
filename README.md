# Spark-Concepts

## Description
This project is a full stack project that uses node.js, express.js, mysql, sequelize, and handlebars to build up the project.  The project itself is in the same directory as this README.md file for download and use, while a live version is deployed [here](https://spark-concepts-dad483b0ca89.herokuapp.com/) or at [sparkmyconcepts.com](http://sparkmyconcepts.com/). If the link doesn't work or you wish to use the site in a local server, you can clone the project and deploy it or use it locally.  The purpose of the application is to create an online community for builders or other people who like to create things.  As used in the application a "Spark" is an idea for a project that can be built or an idea of something a user wants to build.  These ideas can be posted on the site and other users can comment and/or provide adivice on how to proceed with developing or building the project.  Of course, the application was created by software developers, but the projects don't necessarily need to lean in that direction, but the belief behind the idea was to create a community where people who make things can communicate on bringing those ideas into reality.   

## Table of Contents

[Installation](#Installation)

[Usage](#Usage)

[Contributing](#Contributing)

[Tests](#Tests)

[License](#License)

[Questions](#Questions)

## Installation
Prerequisites are that you must already have node.js and mysql installed on your system.  

To install locally please follow the following steps:
1. Clone the directory 
2. Run "npm install" in the terminal to install all the required dependencies  
3. Fill the .env file needs to be filled out according to your local system
4. Login to chatgpt and inside your account get an api key to add to the env file
5. Setup the "spark_db" database
6. Run "npm start" to instantiate the application.  

if seed data is needed please run "npm run seed" which will generate some basic data. 

## Usage
To use the application either navigate to the public url [sparkmyconcepts](http://sparkmyconcepts.com/) or "localhost:3001" for the local copy. 

On load it should redirect you to login or make an account. To make an account you need to use an unique email and a password thats at least 8 letters long.

After you login or are already loged in it will take you to the main landing page with will get all the public spark/ideas. You can click on an idea to check out the comments or you can use the nav bar to get to the create idea's page where you can use chat gpt to generate a random idea for you.

There is also a user tab as well as a tab to view your own user information.

## Tests
There are no pre-prepared tests that we've created to test the application.  

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions/Comments
We would like to have a cleaner UI as well as better utilizations for chat gpt which will allow for cleaner inputs and more variable inputs from the user.

Also we have a hard coded category list as well as a goal to utilize metrics for comments/favorites but was not able to fully impletement them in the code base. 

## Contributing
This is a group project completed by Brian Wiley, Chris Osborne, and Colin Laukka. 

If one would like to contribute to the repsitory as well feel free to email Brian Wiley at bswiley@gmail.com.  
