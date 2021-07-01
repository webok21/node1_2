const myFunction = require('./function')
const myData = require('./data')
const functionWithoutArray = require('./funcWoArray')


// console.log(myFunction.first(myData.myArray))
// console.log(myFunction.notLast(myData.myArray))
// console.log(myFunction.last(myData.myArray))
// console.log(myFunction.notFirst(myData.myArray))


// console.log(myFunction.nPosition(myData.myArray, 6))

// console.log(myFunction.removeEle(myData.myArray, "remove"))

// console.log(myFunction.removeDuplicates(myData.numArray))
// console.log(myFunction.sumArray(myData.numArray))

console.log(functionWithoutArray.randomNum(5, 10))

console.log(functionWithoutArray.firstLetterUppercase("Was mache ich hier eigentlich"))

console.log(functionWithoutArray.upperCase("google und stackoverflow"))

console.log(functionWithoutArray.checkLastLetter("Test", "t"))
console.log(functionWithoutArray.checkLastLetter("Test", "q"))