let whaleInput = 'turpentine and turtles';                                        // Text input to translate

const vowels = ['a', 'e', 'i', 'o', 'u'];                                         // List of convertable characters

let resultArray = [];

for (let w = 0; w < whaleInput.length; w++) {                   
    for (let v = 0; v < vowels.length; v++) {
        if (whaleInput[w] === vowels[v]) {                   
        if (whaleInput[w] === 'e') {
        resultArray.push('ee')   
        }
        if (whaleInput[w] === 'u') {
            resultArray.push('uu')   
            }
            else{
                resultArray.push(whaleInput[w])
            }
      }
    }
}
  console.log(resultArray.join(''))