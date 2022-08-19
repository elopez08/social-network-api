
Social Network API
=========================

By Edgardo Lopez
-------------------------
## Table of Contents
==============================
*   [The Purpose](#the-purpose)
*   [Critera](#criteria)
*   [Installation](#installation)
*   [Usage](#usage)
*   [The Process](#the-process)
*   [What Was Done Differently](#differently)
*   [Built With](#built-with)
*   [Contributing](#contributing)
*   [Project Status](#project-status)
*   [Disclaimer](#disclaimer)
*   [Website](#website)
==============================

#   [The Purpose](#the-purpose)

There are two purposes:  One, to show my personal portfolio for the others to see when introducing myself.  Two, to contribute on a more public usage by showing how the portfolio was made to aid those making their own portfolio.

#   [Critera](#criteria)

    User Story
    AS A social media startup
    I WANT an API for my social network that uses a NoSQL database
    SO THAT my website can handle large amounts of unstructured data
    Acceptance Criteria
    GIVEN a social network API
    WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database
    WHEN I open API GET routes in Insomnia for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON
    WHEN I test API POST, PUT, and DELETE routes in Insomnia
    THEN I am able to successfully create, update, and delete users and thoughts in my database
    WHEN I test API POST and DELETE routes in Insomnia
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

#   [Installation](#installation)

Head on over to the GitHub:

When you have a folder location, issue the command:  

```bash
git clone {link of the project}
```
Remember to use a program such as Powershell and have a program like Visual Studio Code to be able to open and edit the project.

#   [Usage](#usage)

You'll need to use a program similar to "Insomnia".  Go to the "social-network-api" and then type in:
```
npm run start
```
This will then cause the prorgram to run.  You'll then need to go to the Insomnia and while you are looking at the routes, you'll be able to type in the web link for it to work.  Follow the link and then read on the controllers file to see what it'll do.


#   [The Process](#the-process)

We need to install the express and mongoose to work.  Using the "server.js" as a guide we then work our way from the top to the bottom.  We need to make sure we're connecting to a port (in this case, 3001).  It'll then link to the "routes" folder.  We also need to make sure that the app is listening for the port.

Once that's done, we can then start with the expressions we need such as "getAllUsers".  

#  [What Was Done Differently](#differently)

From the previous section to the updated, there were a few changes made.  First, I have the media query involved.  With the constant evolution in technology, one of the few things that needed to be done is have an accesability from both Desktop and Mobile devices in case someone were to look at the portfolio from either said devices.  The code itself has a way to reconstruct so that it is neatly laid out as much as possible to show on a different sized screen.

As more of my work is being added to the system, I changed the properties from "Flex" properties to "Grid".  This will ensure to have a better layout when adding new information in the system.  With this, I was also able to understand the properties of the "Grid" and was able to show a much neater presentation on the page overall.

#   [Built With](#built-with)

    *HTML
    *CSS

#  [Contributing](#contributing)
Made with ❤️ by [Edgardo Lopez]

#  [Project Status](#project-status)

As stated on the "What Was Done Differently", there are portions of the file that have been changed since assigned.  As I continue to grow as a developer, I'll be inputing additional of my work from GitHub on the portfolio as well as reconstructing the layout of the page (such as the previous change when using Grid instead of Flex).  Keep an eye out for any updates on the portfolio itself!

#  [Disclaimer](#disclaimer)

The project is open for anyone to use.  As stated on the purpose, it's to help out those that are starting in making a portfolio of their own.

#   [Website](#website)