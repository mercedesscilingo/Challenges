const prompt = require("prompt-sync")({ sigint: true });

const binaryNumber = prompt("Enter a binary number up to 8 digits: ");

function convertBinaryToDecimal (number){
    const onlyBinary = (element) => (element === "1" || element === "0");
    const binary = number.split('').filter(onlyBinary);
    if (number.length !== binary.length || number.length > 8){
        return "Error, please enter a valid number.";
    }
    else {
        const decimal = parseInt(number, 2);
        return decimal
    }
};

const decimalResults = convertBinaryToDecimal(binaryNumber);
console.log(decimalResults);