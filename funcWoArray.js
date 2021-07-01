const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
    //min and max included
    //(max-min) + min (min included and max not included)
}

const firstLetterUppercase = (string) => {
    // return string.charAt(0).toUpperCase() + string.slice(1)
    return string[0].toUpperCase() + string.slice(1)
}

const upperCase = (string) => {
    return string.toUpperCase()
}

const checkLastLetter = (word, letter) => {
    if (word.slice(-1) === letter) {
        return true
    } else {
        return false
    }
}

module.exports = {
    randomNum,
    firstLetterUppercase,
    upperCase,
    checkLastLetter
}
