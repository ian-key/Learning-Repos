// Logic

// OR Operator

// Checks two values and returns true or false. If one or more is truthy, then true, otherwise false.
true || false;      // True
10 > 5 || 10 > 20;  // True
false || false;     // False 

// Comparison Operator

// Compact code for two decisions. 

let price = 10.5;
let day = "Monday";
 
day === "Monday" ? price -= 1.5 : price += 1.5;


// AND Statement

// && operator both must be truthy to return true

true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true

// Switch Statement

// If Statement with else as a default value

const food = 'salad';
 
switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;                                                    // If break is not used, the code will evaluate all options
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
};

// If Statement

const isMailSent = true;
 
if (isMailSent) {
  console.log('Mail sent to recipient');
};

// Else Statement

const isTaskCompleted = false;
 
if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
};

// IF ELSE Statement


const size = 10;
 
if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}


// NOT Operator

let lateToWork = true;
let oppositeValue = !lateToWork;
 
console.log(oppositeValue); 

// Comparisons

/* 
=== strict equal
!== strict not equal
> greater than
>= greater than or equal
< less than
<= less than or equal
*/


/*
------------------------------------------------------------------------------------------------------------
*/


// Functions

// Declare simple functions

function greetWorld() {                                         // Declare name of function
    console.log('Hello, World!');                               // Give content of function
  }

  greetWorld();                                                 // Call the function


/*
------------------------------------------------------------------------------------------------------------
*/

// Function Expressions (Function stored in a variable)

// Example 1

const calculateArea = function(width, height) {                 // Declare the variable with the function parameters
  const area = width * height;                                  // Do the calculation
  return area;                                                  // Return the result
};


// Example 2

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true
  } else {
    return false
  }
 }
 
 console.log(plantNeedsWater('Tuesday'))


/*
------------------------------------------------------------------------------------------------------------
*/

// Arrow Functions

// Example 1

const rectangleArea = (width, height) => {                      // Declare the variable, add parameters then use the arrow
  let area = width * height;                                    // Do the calculation
  return area;                                                  // Return the result
};

// Example 2 - No Parameters

const functionName = () => {
  //function (content)
};


// Example 3 - 1 Parameter

const functionName = parameterOne => {                          // If only one parameter, no brackets needed
  //function (content)
};

// Example 4 - 2+ Parameters

const functionName = (parameterOne, parameterTwo) => {
  //function (content)
};

// Example 5 - Single Line Blocks

const sumNumbers = number => number + number;                    // Single line functions don't need brackets, and return isn't required


/*
------------------------------------------------------------------------------------------------------------
*/


// Functions with parameters

// 1 Parameter

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole')

// 2 Parameters

function calculateArea(width, height) {
    console.log(width * height); 
}

calculateArea(8,2)


/*
------------------------------------------------------------------------------------------------------------
*/


// Default Parameters

function greeting (name = 'stranger') {                       // Where stranger will be returned in the absence of a name
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!


/*
------------------------------------------------------------------------------------------------------------
*/


// Return Values

function monitorCount(rows, columns) {
  return rows * columns
}

const numOfMonitors = monitorCount(5, 4)

console.log(numOfMonitors)


/*
------------------------------------------------------------------------------------------------------------
*/


// Helper Functions

// Example 1

function monitorCount(rows, columns) {                        // Calculation for the count of monitors
  return rows * columns;
}

function costOfMonitors(rows, columns) {                      // Calculation of the cost, passed to monitorCount * 200
  return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4)                        // Declare variable which calls 2nd function then 1st function

console.log(totalCost)


// Example 2

function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
console.log(getFahrenheit(15)); // Returns 59

/*
------------------------------------------------------------------------------------------------------------
*/

// Arrays


// Define Arrays

let arrayName = ['Item 1', 2, false]                            // List items in an array with square brackets

console.log(arrayName[0])                                       // Call an array and define the item number you want

// Update Array

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';                                          // Update with the array name, location and resulting update
console.log(seasons); 

// You can define arrays with let or const. Let you can define a whole new array, const can only update.


// Array Properties

// .length - non-mutating - returns the number of items in the array
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length) // returns 3

// .unshift - mutating - adds items to the start of the array
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.unshift('popcorn')
console.log(groceryList) // outputs ['popcorn', 'orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

// .push - mutating - adds items to the end of an array
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('empty bins', 'tidy garden')
console.log(chores) // returns [ 'wash dishes','do laundry','take out trash','empty bins','tidy garden' ]

// .pop - mutating - removes the last item from the array
const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// .shift - mutating - removes the first item from the arrayName
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift()
console.log(groceryList) // outputs ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

// .slice - non-mutating - takes the start and ending positions and outputs the results
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList.slice(1, 4)) // outputs 'bananas', 'coffee beans', 'brown rice'. Remember to add one to the last position

// .indexOf - non-mutating - Gets the index position of the item in the brackets 
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex) // returns 4

// .splice - mutating - removes items and adds a new item

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.splice(6, 5, 'know') // starting with index 6, remove 5 items and replace with one string

// .join - non-mutating - combines all the values in the array and defines what splits them up

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.join(' ')); // outputs the sentence with spaces in between each word.


// Arrays and Functions

// We can use functions to change arrays:
const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){                                    // When called, the function will match the array name and insert/update/delete from the array.
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept) // outputs [ 'arrays', 'can', 'be', 'MUTATED' ]

const concept = ['arrays', 'can', 'be', 'mutated'];
function removeElement(newArr){
  newArr.pop()
}
removeElement(concept)
console.log(concept) // outputs [ 'arrays', 'can', 'be' ]

// Nested arrays

// Arrays can have arrays inside of them. 

const numberClusters = [[1, 2], [3, 4], [5, 6]] // This is one array, with three arrays inside
const target = numberClusters[2][1] // We're trying to access the number 6 in the array

/*
------------------------------------------------------------------------------------------------------------
*/

// Loops

// FOR Loops - When you can define a number of iterations

for (let counter = 5; counter < 11; counter++) {          // Three arguments variable and starting number; stopping condition; iteration number
  console.log(counter)
}  // outputs 5 6 7 8 9 10

// Reverse loops
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
} // outputs 3 2 1 0

// Looping an array

const vacationSpots = ['Bali', 'Paris', 'Tulum'];                   // Print I would love to visit & each place name in the array
for (let i = 0; i < vacationSpots.length; i++){                     // Define a variable to be used as the index for the array
  console.log("I would love to visit " + vacationSpots[i])
}

// Nested Loops
const bobsFollowers = ['John', 'James', 'Jamie', 'Martin']          // Defines Bobs friends
const tinasFollowers = ['James', 'Martin', 'Michael']               // Defines Tina's friends
const mutualFollowers = []                                          // Empty array to hold results

for (let b = 0; b < bobsFollowers.length; b++) {                    // For each of Bob's folowers
  for (let t = 0; t < tinasFollowers.length; t++) {                 // Compare with all of Tina's followers
    if (bobsFollowers[b] === tinasFollowers[t]) {                   // If they match, do the following
      mutualFollowers.push(bobsFollowers[b])                        // Add them to the end of the blank array
    }
  }
}
console.log(mutualFollowers)                                        // Print friends in common

// WHILE loops

const cards = ['diamond', 'spade', 'heart', 'club'];                // Define array to be searched using the random number generator

let currentCard;                                                    // define empty variable
while (currentCard !== 'spade'){                                    // stop the loop when the card is a spade
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

// Do While Loops - Runs once, then goes into a loop

let cupsOfSugarNeeded = 5;                                          // amount needed
let cupsAdded = 0;                                                  // staring amount
do {
  cupsAdded++;                                                      // adding each cup
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded)                             // Stops when this is false


// Breaking a loop

// Input break to stop when a condition is met, even if the loop hasn't met it's final goal

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i])
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
}
console.log("And if you don't know, now you know.")


for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');


// For Of Loops - Iterates over each item in the array or character in a string

const fruits = ['oranges', 'apples', 'grapes'];
for (const fruit of fruits) {
  console.log(fruit);
}

// Breaking For Of Loops - use of break

// Break
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
for (const bird of strangeBirds) {
  if (bird === 'Basan'){ 
    break; 
  }
  console.log(bird); // will output the first 2 items and stop when the condition is met
}

// Continue
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
for (const bird of strangeBirds) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird);  // Will omit Cow
}

/*
------------------------------------------------------------------------------------------------------------
*/

// Objects

// Objects are assigned to a variable and given properties are
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
}

// Accessing properties - accessing through a .function
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

console.log(crewCount)
console.log(planetArray)

// Accessing properties - accessing through square brackets (must be done if not a string)

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]); // Accessing properties via variable

// Assigning properties to an object

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold'    // Update via dot properties
spaceship['numEngines'] = 10         // Update via square brackets

// Delete properties

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

delete spaceship['Secret Mission']

// Methods - Functions stored against a property of an object

// Functions in an object
const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

// Without function name
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

alienShip.invade(); 

// Nested objects

// We can nest objects within objects, as in the 'Crew' object
let spaceship = {
  passengers: [{name: 'Ian'}, 'Jay', 'Colin'],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

// Returning values from nested objects
const capFave = spaceship.crew.captain['favorite foods'][0] // returns 'cookies'

// Pass by references
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);                         // Functions which pass a variable assigned to an object as an argument update the object even if const

let remotelyDisable = objParam => {         // A function can create or reassign a property to an object
  objParam.disabled = true;
}

remotelyDisable(spaceship);                 

console.log(spaceship)


// Looping through Objects

// Objects use a For In loop

let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`); // List role and name
}

for (let crewDegree in spaceship.crew) {
  console.log(`${spaceship.crew[crewDegree].name}: ${spaceship.crew[crewDegree].degree}`) // List name and degree
}

// Advanced objects

// THIS keyword - functions within an object cannot reach other properties of an object that is not within the function directly. THIS is the keyword that references the 'calling object' to access other properties in the objects

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo())

// Arrow Functions and THIS - Arrow functions cannot use THIS. Arrow functions look to a global namespace rather than inside the object that is defined. Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. Arrow functions should be avoided when using THIS.

// With an arrow function
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
goat.diet(); // Prints undefined

// Without an arrow function
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
goat.diet(); // Prints herbivore


// Privacy

// JS naming conventions place an underscore before the name of a property

const bankAccount = {
  _amount: 1000           // Despite the _amount property, this can still be updated
}                       

// Getters

// Using the get keyword, getters can perform actions on data, can return values using conditions, we can use this, makes it easier to understand.

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return "System malfunction: cannot retrieve energy level"
    } 
   }
};

console.log(robot.energyLevel)


// Setters

// Using the set keyword, setters can reassign values of existing properties within an object. Setters can be used to check inputs, perform actions, and display how an object should be used.

// Setters must have one parameter

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){                                                  // Use a setter tp check if the input is a number, and is in a valid range
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;                                           // If it's allowed, update the property
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
};
robot.numOfSensors = 100 
console.log(robot.numOfSensors)


// Factory Functions - Creating objects at scale

// Factory Functions allow us to pass variables to a function to create new objects

const robotFactory = (model, mobile) => {           // Factory function that uses two parameters to create an object
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep boop');
    },
  }
}

const tinCan = robotFactory('P-500', true)          // Declare a variable which will be the name of the object, then call the factory function with the associated parameters to create the object

tinCan.beep()

// Destructuring - Shortcuts for assigning properties to variables

// Where the property name matches the parameter, you can use shorthand

function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true)

tinCan.beep()

// Destructured Assignment

// Simplified ways of storing key-value pairs to variables in shorthand

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// We can use the longhand version
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

// Or the shorthand version using the name of the variable as the name of the object key
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

// We can also use this for nested properties in an object
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

// We can even call methods inside an object using shorthand

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot; // Create a variable with the same name as the property in the object
functionality.fireLaser() // Call the method

// Built in object methods

//Object.Keys - Returns a list of keys in an object
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);

console.log(robotKeys); // returns model, mobile, sentient, armor, energyLevel

// Object.entries - Returns a list of keys and their values in an array, inside an array

const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Object.assign - Adds new properties to an object. Passes two parameters (target, source)
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);

// Higher Order Functions / Abstractions

// In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes; // declare variable that references a function. 

is2p2();                                                  // You can then invoke this function as normal.

console.log(is2p2.name)                                   // Check the name of the original function with .name

// Functions as parameters (Higher Order Functions) - A higher-order function is a function that either accepts functions as parameters, returns a function, or both

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const timeFuncRuntime = funcParameter => {                // Pass in a function and time how long it takes to run
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
console.log(time2p2)




// Iterators

// Iterators are methods called on an array to manipulate or return values

// .forEach() - runs the code for each item in the array
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Addressing the array directly
fruits.forEach(function(fruit) {
  console.log('I would like to eat a ' + fruit)
})

// With an arrow function
fruits.forEach(fruit => console.log('I would like to eat a ' + fruit));

// With a function declaration then invoking the function
function printFruits(fruit){
    console.log('I would like to eat a ' + fruit);
}
fruits.forEach(printFruits)

// .map()  - returns a new array made up of the values from the function
const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

//.filter - filters an array based on a condition
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

// Filtering on word length
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

// .findIndex() -  Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function. Will output -1 if nothing matches

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Returns 30

// .reduce() - This method returns a single value after iterating through the array

const newNumbers = [1, 3, 5, 7];                                      // Define an array

const newSum = newNumbers.reduce((accumulator, currentValue) => {     // Use .reduce with two arguments of accumulator and current value. Each iteration logs the value or current value and then adds the new number
  console.log('The value of accumulator: ', accumulator);             // Log the accumulator
  console.log('The value of currentValue: ', currentValue);           // Log the current value in the arrays
  return accumulator + currentValue;                                  // Returns the sum of the accumulator and the current value in the arrays
}, 10);                                                               // You can pass a 2nd argument to .reduce() to add a starting value

console.log(newSum);


// .some() - This method tests if at least one of the elements of the array is true. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));

// .every() - The every method tests whether all elements in the array pass the test. Returns a boolean value

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

const interestingWords = words.filter(word => {
  return word.length > 5;
});

console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));

 // Error Handling

 // Create an error - this will not stop the program from running

console.log(Error('Your error message here'))

// Throw an error - this will stop the program from progressing further

throw Error('Username or password do not match');

// Handling an error with try/catch

try {                                               // Try the code in the try block
  throw Error('This is an error message')
} catch (e) {                                       // If the code results in an error, the catch portion of the code will handle the error
  console.log(e)
}

const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
// Prints: TypeError: Assignment to constant variable.