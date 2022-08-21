// Mixed Messages Portfolio Project

// Import Utility
const { printQueryResults } = require('./utils');

// Access DB
const sqlite3 = require('sqlite3');
const { get } = require('http');

const db = new sqlite3.Database('./cardsagainsthumanity.db');

// Declare empty variables

let blackCardPlayed = [];
let whiteCardPlayed = [];
let maxBlackCards = 0;
let maxWhiteCards = 0;

// Find maximum number of cards in each table
function getMaxCards() {
maxBlackCards = db.all("SELECT MAX(ID) FROM black_cards", (error, rows) => {
    printQueryResults(rows)});

maxWhiteCards = db.all("SELECT MAX(ID) FROM white_cards", (error, rows) => {
    printQueryResults(rows)});
};

// Generate a random black card, taking into account the number of cards required for the black card

blackCardID = Math.floor(Math.random() * maxBlackCards) + 1;
console.log(blackCardID);

whiteCardsRequired = db.get("Select pick, text FROM black_cards WHERE ID = ", (error, rows) => {
    printQueryResults(rows); 
  }); //TO FIX - Get the number of pick cards













