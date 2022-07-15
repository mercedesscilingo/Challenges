const prompt = require("prompt-sync")({ sigint: true })

function convertBinaryToDecimal(string) {

    string = prompt("Enter a binary number up to 8 digits: ")
    let binary = string.split('').filter(function (elemento) { return elemento === "1" || elemento === "0" })

    if (string.length !== binary.length || string.length > 8) {
        return "Error, please enter a valid number."
    }
    else {
        let decimal = parseInt(string, 2)
        return decimal
    }
};


let decimalResults = convertBinaryToDecimal()
console.log(decimalResults)


