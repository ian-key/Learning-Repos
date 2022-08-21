let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

/* Task 3 
Create a generateTarget() function. 
This function will be called at the start of each new round in order to generate the new secret target number.
This function should return a random integer between 0 and 9.
*/

function generateTarget() {
    const targetNumber = Math.floor(Math.random() * 9);
    return targetNumber;
};


/* Task 4
Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.
This function:
- Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
- Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
- Return true if the human player wins, and false if the computer player wins.
*/

function compareGuesses(currentHumanGuess, computerGuess, targetNumber) {
    if (Math.abs(currentHumanGuess - targetNumber) < Math.abs(computerGuess - targetNumber)) {
        return true
      } 
      else if (Math.abs(currentHumanGuess - targetNumber) > Math.abs(computerGuess - targetNumber)) {
        return false
      }
      else return true
    };

/* Task 5
Create an updateScore() function. This function will be used to correctly increase the winner’s score after each round.
This function
- Has a single parameter. This parameter will be a string value representing the winner.
- Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
- Does not need to return any value.
*/

function updateScore(winner) {
    if (winner === 'human') {
        humanScore +=1
    }
    if (winner === 'computer') {
        computerScore +=1
    }
};

/* Task 6
Create an advanceRound() function. This function will be used to update the round number after each round.
advanceRound() should increase the value of currentRoundNumber by 1.
*/

function advanceRound() {
    currentRoundNumber +=1
  }
