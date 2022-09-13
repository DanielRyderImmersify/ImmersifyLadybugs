# How to Run

1.  If you haven't already, install Node.js from [Download NodeJS](https://nodejs.org/en/download/) (this project uses version 16.14.2)
2.  Verify your instalation in the terminal with the commands 'node --version' and 'npm -v' (version 16.14.2 or above should mostly be backwards compatible)
3.  Clone the project locally
4.  Open the folder in VSCode or alternative IDE
5.  If using VSCode reccomended extensions are ESLint, React Native Tools, DotENV
6.  Normally .env files containing sensitive information would not be included but in this case it has been provided for you
7.  Open the terminal (Ctrl+~) to toggle or (Ctrl+Shift+`) to open a new terminal
8.  Make sure that you are in the directory containing the root of the project
9.  Run the command (npm install) in your terminal
10. While developing you can run the command (npm run dev) to start the node.js server and react client
11. To stop these processes use the command (Ctrl+C)
12. The web app can be found on (http://localhost:3000)
13. Don't worry about building or deploying the web app, just remember to save your changes locally, this is what will be evaluated

# The Project

## NodeJS/Express

There is a simple node backend that uses express to route to the React client.

For simplicity all of the data in this application is stored locally within the '/node/data' folder.

The route '/node/routes/getLadybugs.js' is called by the utility function '/src/components/Utils/getLadybugs.js' and returns the ladybugs.json file as a string.

## React

The frontend of this web app was made using 'create-react-app' with only a few additions

In '/src/components/Landing/Landing.js' the 'GetLadybugs' function is called and given two callback parameters

-   the first is a function to handle the ladybugs json (which has been parsed by 'GetLadybugs')
-   the second is an error handling function

A good starting point would be to put this data into individual arrays (name, imageLocation and description)

# Your Task

## Create a simple web app that displays information about ladybugs
