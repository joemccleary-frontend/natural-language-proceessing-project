#Evaluate News Senitment Project
===============================

Scope
-----

This project utilizes MeaningCloud's Natural Language Processing API, a user inputs a link to a news article where the app will analyze the positivity of the article as well as subjectivity, irony and consistency.

Setup
----------------

Node is required to run the local server, please ensure you have already installed it. You can check if you already have node install by using the node -v command

Clone these files 

Move into the project folder

Use the NPM install command to install the packages required to run this program

Sign up for an API key at meaningcloud.com

Install npm dotenv package to work with .env files

Create a .env file in your root directory

In the .env file add in your key for the asterisks like so:
API_KEY=**************************

To build the production environment use 
npm run build-prod

Once this has completed use
npm start

It's good to go! Enter the url to an article and it will provide  you with the analysis.