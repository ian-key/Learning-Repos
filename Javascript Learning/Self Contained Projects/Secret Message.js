let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); // remove the last item form the array

secretMessage.push("to", "Program"); // add two new strings to the end of the array

const repEasily = secretMessage.indexOf("easily") // replace easily with right
secretMessage[repEasily] = "right"

secretMessage.shift(); // remove the first item from the array

secretMessage.unshift("Programming")

secretMessage.splice(6, 5, 'know')

console.log(secretMessage.join(' '));