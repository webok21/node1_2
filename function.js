const { myArray, numArray } = require("./data")

const first = () => {
    return (myArray[0])
}

const notLast = () => {
    myArray.pop()
    return myArray
}

const last = () => {
    return (myArray.pop())
}

const notFirst = () => {
    myArray.shift()
    return myArray
}

const nPosition = (ele, n) => {
    if (n < 0 || n > ele.length) {
        return ele.pop()
    } else {
        return "alles im grünen bereich"
    }
}

const removeEle = (array, ele) => {
    return myArray.filter(item => item !== ele)
}

const removeDuplicates = (array) => {
    return array.filter((value, index) => array.indexOf(value) === index)
}

const sumArray = array =>
    array.reduce((a, b) => a + b, 0
    )


module.exports = {
    first,
    notLast,
    last,
    notFirst,
    nPosition,
    removeEle,
    removeDuplicates,
    sumArray
}