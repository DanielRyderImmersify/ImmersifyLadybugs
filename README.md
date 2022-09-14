![image](https://i.natgeofe.com/k/47bb0144-f7d1-4a28-a102-834a590f6e57/ladybug-leaf_16x9.jpg)

# How to Run

1.  If you haven't already, install Node.js from [Download NodeJS](https://nodejs.org/en/download/) (this project uses version 16.14.2)
2.  Verify your installation in the terminal with the commands 'node --version' and 'npm -v' (version 16.14.2 or above should mostly be backwards compatible)
3.  Clone the project locally
4.  Open the folder in VSCode or alternative IDE
5.  If using VSCode recommended extensions are ESLint, React Native Tools, DotENV
6.  Normally .env files containing sensitive information would not be included in a public repository but in this case, it has been provided for you
7.  Open the terminal (Ctrl+~) to toggle or (Ctrl+Shift+`) to open a new terminal
8.  Make sure that you are in the directory containing the root of the project
9.  Run the command (npm install) in your terminal
10. While developing you can run the command (npm run dev) to start the node.js server and react client
11. To stop these processes use the command (Ctrl+C)
12. The web app can be found on (http://localhost:3000)
13. Don't worry about building or deploying the web app, just remember to save your changes locally, this is what will be evaluated

# The Project

## NodeJS/Express

There is a simple node server ('app.js') that uses express to route to the React client.

For simplicity, all of the data in this application is stored locally within the '/node/data' folder.

The route '/node/routes/getLadybugs.js' is called by the utility function '/src/components/Utils/getLadybugs.js' and returns the ladybugs.json file as a string.

## React

The frontend of this web app was made using 'create-react-app' with only a few additions

In '/src/components/Landing/Landing.js' the 'GetLadybugs' function is called and given two callback parameters

-   the first is a function to handle the ladybugs JSON (which has been parsed by 'GetLadybugs')
-   the second is an error handling function

The images specified by 'imageLocation' can be found in 'src/images'

A good starting point would be to put this data into individual arrays (name, imageLocation and description)

Using functional React (hooks) is preferred although you should complete the task however you feel most comfortable

# Your Task

This task does have a rough guideline of what to create but how you do that is completely up to you.

However you prefer to plan and execute this task is accepted, just make sure that you can communicate your process, and reasoning for the decisions you made.

## Create a simple web app that displays information about ladybugs

Using the information supplied to you in the ladybugs JSON create a web app that has the following functionality

-   A landing page that shows all of the ladybugs names and images (can be formatted however you choose)

-   Each ladybug can be clicked on to show all of the information on its own page (preferrably without a page reload. _hint_ use hooks and components)

## Additional Tasks (optional)

It is not necessarily expected for you to complete these tasks, perhaps just pick the one which interests you the most if you have time, or you may want to spend that time adding some more functionality to your React app (e.g. recommending the next ladybug to look at in a side panel).

### Node

Using the file 'node/data/users.json' create a POST route that will return 'true' if there is a username and password pair in the request made from React.

You can find a template for the React fetch request in 'src/components/Utils/Login/getUsers.js

If you are feeling adventurous you could even try and link this API call to the data you got from the ladybug JSON to only allow users on the list access to ladybugs that are 'locked'

### CSS

Show off your CSS skills and make your web app look nice :)
