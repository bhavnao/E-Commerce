# E-Commerce
We have to make a back end for an e-commerce site using working Express.js API to use Sequelize to interact with a MySQL database.User can run the CRUD methods in insomnia.

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies.

## Expected Goals
* GIVEN a functional Express.js API,
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize.
* WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data.
* WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database.
* WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON.
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database.

## Installation and Usage
* Run npm install to get all the dependencies- dotenv,express,mysql,sequelize.
* Run Source schema.sql to craete tables and node seeds/index.js to seed the database
* In Insominia now you can run GET,PUT,POST and DELETE methods to perform on the database.

## Github and Demo
https://github.com/bhavnao/E-Commerce
