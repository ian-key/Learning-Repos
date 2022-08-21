# Mysterious Organisms Project

## Overview
This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

## Goals
In this project, you’ll be building an interactive terminal game. The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

## Requirements

In order to start this project, you should have completed lessons at least through Classes in our Introduction to JavaScript curriculum.

In this project, you’ll be building an interactive terminal game with JavaScript classes. Because the goal involves user input, make sure you read our guide on working with user input in Node.js. If you complete this project on our platform, you can test and run your code with the command node main.js in our terminal.

Watch this video to get a sense of what you’ll be building:
![Video](https://content.codecademy.com/PRO/independent-practice-projects/find-your-hat/find-your-hat-demo.gif "Find your hat")

### Req.1
Your project is centered on a Field class. This and the following tasks will describe how the class should function at a high level, and it will be up to you to figure out the implementation in code. As you go, test your code by creating instances of the class and calling its methods.

The Field constructor should take a two-dimensional array representing the “field” itself. A field consists of a grid containing “holes” (O) and one “hat” (^). We use a neutral background character (░) to indicate the rest of the field itself. The player will begin in the upper-left of the field, and the player’s path is represented by *.
```
*░O
░O░
░^░
```

Your class should take a single argument representing the field:
```
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
```

To start, you should store a reference to the field in the Field constructor (this.field). As you complete your project, you may want to print and inspect this property to see how it changes in response to your methods.

### Req.2
Give your Field class a .print() method that prints the current state of the field. You can choose to format this however you want, but it will be much easier to play the game if you print out a string representation of the board instead of the raw array.

The [.join() array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) is very helpful for formatting and printing arrays as strings.

### Req.3
Your game should be playable by users. In order to facilitate this, build out the following behavior:

- When a user runs main.js, they should be prompted for input and be able to indicate which direction they’d like to “move”.
- After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with *. They should be prompted for their next move.

This should continue until the user either:

1. Wins by finding their hat.
2. Loses by landing on (and falling in) a hole.
3. Attempts to move “outside” the field.

When any of the above occur, let the user know and end the game.

### Req.4
Add a .generateField() method to your Field class. This doesn’t need to be tied to a particular instance, so make it a static method of the class itself.

This method should at least take arguments for height and width of the field, and it should return a randomized two-dimensional array representing the field with a hat and one or more holes. In our solution, we added a third percentage argument used to determine what percent of the field should be covered in holes.

## Extensions

### Solution
Great work! Visit [our forums](https://discuss.codecademy.com/t/find-your-hat-challenge-project-javascript/462380) to compare your project to our sample solution code. You can also learn how to host your own solution on GitHub so you can share it with other learners! Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.

### Further Challenges

If you’d like to extend your project past our requirements, here are a few ideas:

- Have the character start on a random location that’s not the upper-left corner.
- Create a “hard mode” where one or more holes are added after certain turns.
- Improve your game’s graphics and interactivity in the terminal. There are many [helpful packages](https://github.com/cronvel/terminal-kit) to assist with this, and you can really get creative with how you approach terminal games.
- Create a field validator to ensure that the field generated by Field.generateField() can actually be solved. This might be pretty difficult! You’ll essentially be creating a version of a [maze solver](https://en.wikipedia.org/wiki/Maze_solving_algorithm).