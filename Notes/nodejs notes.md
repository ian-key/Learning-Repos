# NodeJS - Learning

### Process Object

Within NodeJS, there is an object called 'process' which holds details about the process running in the program.

Read more: [NodeJS Process Object](https://nodejs.org/api/process.html)

Examples:

The ```process.env``` property stores and controls information about the environment in which the process is running. The ```PWD``` proerty holds a string with the directory in which the current process is located. 



### Modules

Essentially, a module is a collection of code located in a file. Instead of having an entire program located in a single file, code is organized into separate files and combined through requiring them where needed using the ```require()``` function.

```
// Require in the 'events' core module:
let events = require('events');
```

Example:

```
// dog.js
module.exports = class Dog {
 
  constructor(name) {
    this.name = name;
  }
 
  praise() {
    return `Good dog, ${this.name}!`;
  }
};
```
Above, we've assigned the Dog class as the value of module.exports. Each JS fule in Node has a special object called module.exports. It holds everything thats in that file, thats available to be accessed in a different file.

```
// app.js
let Dog = require('./dog.js');
const tadpole = new Dog('Tadpole');
console.log(tadpole.praise());
```

### Event Driven Process

We don't know what order someone is going to be using our program, so we need to allow each area to be triggered independently of each other.

Node has a concept of ```Event Emitters``` which can be accessed by requiring the events core module.

```
// Require in the 'events' core module
let events = require('events');
 
// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();
```

Event Emitters have two methods:

```.on()``` - this method takes the name of an event, and a function to run when it hears that event happening

```.emit()``` - this method announces that an event has happened. The method uses the name of the event to trigger, and the data to be passed to the .on() function when triggered.

Example: 
```
// require events module
let events = require('events'); 

// function used in .on method
let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// create an event emitter
let myEmitter = new events.EventEmitter();

// inform the event emitter what event to look for, and what function to run
myEmitter.on('celebration', listenerCallback);

// emit the following event, and pass the data to the function
myEmitter.emit('celebration', 'Ian')
```

### Accepting Input

To have the program output to the terminal, we use stdout.write():
process.stdout.write() - Standard output to terminal

In Node, we can also receive input from a user through the terminal using the stdin.on() method on the process object:
process.stdin.on() - Standard input

We can use .on() as process.stdin is an event emitter.

See the number guesser app as an example.

### Error First Functions

Many asynchronous Node APIs use error-first callback functions: callback functions which have an error as the first expected argument and the data as the second argument. If the asynchronous task results in an error, it will be passed in as the first argument to the callback function. If no error was thrown, the first argument will be undefined.

```
let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};
```

### Accessing the Filesystem

Node has a core module called ```fs``` which holds most interactions with the file system.

Each method available through the fs module has a synchronous version and an asynchronous version. One method available on the fs core module is the .readFile() method which reads data from a provided file:

```
const fs = require('fs');
 
let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};
 
fs.readFile('./file.txt', 'utf-8', readDataCallback);
```

- We required in the fs core module.
- We define an error-first callback function which expects an error to be passed as the first argument and data as the second. If the error is present, the function will print ```Something went wrong: ${err}```, otherwise, it will print ```Provided file contained: ${data}```.
- We invoked the .readFile() method with three arguments:
1. The first argument is a string that contains a path to the file file.txt.
2. The second argument is a string specifying the file’s character encoding (usually ‘utf-8’ for text files).
3. The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete. Node will pass the contents of file.txt into the provided callback as its second argument.

#### Reading Streams

We practiced reading the contents of entire files into our JavaScript programs. In more realistic scenarios, data isn’t processed all at once but rather sequentially, piece by piece, in what is known as a stream. 

Streaming data is often preferable since you don’t need enough RAM to process all the data at once nor do you need to have all the data on hand to begin processing it.

One of the simplest uses of streams is reading and writing to files line-by-line. To read files line-by-line, we can use the ```.createInterface()``` method from the ```readline``` core module. .createInterface() returns an Event Emitter, emitting 'line' event.

```
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const printData = (data) => {
  console.log(`Item: ${data}`)
};

myInterface.on('line', printData)
```



Let’s walk through the above code:

- We require in the ```readline``` and ```fs``` core modules.
- We assign to ```myInterface``` the returned value from invoking ```readline.createInterface()``` with an object containing our designated ```input```.
- We set our ```input``` to ```fs.createReadStream('text.txt')``` which will create a stream from the text.txt file.
- Next we assign a listener callback to execute when ```line``` events are emitted. A ```'line'``` event will be emitted after each line from the file is read.
- Our listener callback will log to the console ```'The line read: [fileLine]'```, where ```[fileLine]``` is the line just read.

#### Writing Streams
We can also write to data streams. We can create a writable stream to a file using the ```fs.createWriteStream()``` method:

```
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt');

let transformData = (line) => {
  fileStream.write(`They were out of: ${line}\n`)
};

myInterface.on('line', transformData)
```

- Write to a file called shoppingResults.txt
- Create a listener callback function to use. this function ```transformData```. ```transformData``` should expect to receive some data (we named our parameter ```line```) and it should ```write()``` to the writable stream ```(fileStream)``` in the format ```They were out of: [line]\n```, where ```[line]``` is the argument passed into the function.
- Assign our ```transformData``` function to execute whenever a ```'line'``` event is emitted on the ```myInterface``` stream.

### Creating an HTTP Server

For backend development, we have a requirement to create web servers, which are processes that listen for request from clients and returns responses.

A Node core module designed to meet these needs is the ```http``` module. This module contains functions which simplify interacting with HTTP and streamline receiving and responding to requests.

The ```http.createServer()``` method returns an instance of an ```http.server```. An ```http.server``` has a method ```.listen()``` which causes the server to “listen” for incoming connections. 

When we run ```http.createServer()``` we pass in a custom callback function (often referred to as the ```requestListener```). This callback function will be triggered once the server is listening and receives a request.

Let’s break down how the ```requestListener``` callback function works:

- The function expects two arguments: a request object and a response object.
- Each time a request to the server is made, Node will invoke the provided ```requestListener``` callback function, passing in the request and response objects of the incoming request.
- Request and response objects come with a number of properties and methods of their own, and within the ```requestListener``` function, we can access information about the request via the request object passed in.
- The ```requestListener``` is responsible for setting the response header and body.
- The ```requestListener``` must signal that the interaction is complete by calling the response.end() method.

Example:
```
const http = require('http');
 
let requestListener = (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain' });
  response.write('Hello World!\n');
  response.end();
};
 
const server = http.createServer(requestListener);
 
server.listen(3000);
```
