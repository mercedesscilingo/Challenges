const prompt = require("prompt-sync")({ sigint: true });

const binaryNumber = prompt("Enter a binary number up to 8 digits: ");

function convertBinaryToDecimal (number){
    const binary = number.split('').filter((element) => element === "1" || element === "0");
    if (number.length !== binary.length || number.length > 8){
        return "Error, please enter a valid number.";
    }
    else {
        let decimal = parseInt(number, 2);
        return decimal
    }
};

let decimalResults = convertBinaryToDecimal(binaryNumber);
console.log(decimalResults);