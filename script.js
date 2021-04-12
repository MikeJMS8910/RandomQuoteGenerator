/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const quoteText = document.getElementById('quoteId')  //Variable for getting the element that displays the quote
const quoteAuthor = document.getElementById('sourceId')  //Variable for getting the element that displays the person who said the quote

const quotes = [  //Array for all of the quotes
  ['You miss 100% of the shots you don not take.', 'Wayne Gretzky'],
  ['Whether you think you can or you think you cant, youre right.', 'Henry Ford'],
  ['The only person you are destined to become is the person you decide to be.', 'Ralph Waldo Emerson'],
  ['An unexamined life is not worth living.', 'Socrates'],
  ['Dream big and dare to fail.', 'Norman Vaughan']
]

let currentQuote = 0  //Shows the quote that is currently in use
let newQuote = null  //Will show the quote that was randomly picked
let x = true //For the while loop

function getRandomQuote() {
  while(x == true) {
    newQuote = Math.floor(Math.random() * 4);  //Picks a random number from 0 - 4
    if(newQuote == currentQuote) {  //Makes sure that the quote that was picked is not already on
      x = true
    } else {
      currentQuote = newQuote
      break
    }
  }
}

function printQuote() {
  getRandomQuote()  //Gets the random quote
  quoteText.innerHTML = quotes[currentQuote][0]  //Changes the quotes text
  quoteAuthor.innerHTML = quotes[currentQuote][1]  //Changes teh quotes source
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);