let total = 0;
let operation = null;

const output = document.querySelector(".output");
const numbers = document.querySelector(".numbers");
const operands = document.querySelector(".operands");
const backspace = document.querySelector(".backspace");
const clear = document.querySelector(".clear");

// What does a calculator do

function selectNumber(output, input) {
    let newNumber = "";

    if (output === "0") {
        newNumber = input;
    } else {
        newNumber = output + input;
    }
    return newNumber;
}

function divide(num1, num2) {
    return (num1 / num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function substract(num1, num2) {
    return (num1 - num2);
}

function add(num1, num2) {
    return (num1 + num2);
}

function tallyUp() {
    return total;
}

function selectOperation(operand) {
    const operands = {
        "÷": divide,
        "×": multiply,
        "-": substract,
        "+": add,
        "=": tallyUp
    };
    return operands[operand];
}

function removeRightDigit(number) {
    if (number.length > 1){
        return number.slice(0,-1);

    }
    else {
        return 0;
    }
}
// TODO: have operations be remembered and ran when equal is clicked

while (operation !== null) {
    total = operation(parseInt(total), parseInt(output.innerText));
    operation = null;
}

// listeners
numbers.addEventListener("click", function(event) {
    output.innerText = selectNumber(output.innerText, event.target.innerText);
});

operands.addEventListener("click", function(event) {

    console.log(event.target.innerText);
    if (event.target.innerText === "=") {
        output.innerText = total;
    }
    else {
        const operand = event.target.innerText;
        operation = selectOperation(operand)

        total = output.innerText;
        output.innerText = 0;
    }
})

backspace.addEventListener("click", function() {
    output.innerText = removeRightDigit(output.innerText);
})

clear.addEventListener("click", function() {
    output.innerText = 0;
    total = 0;
    operation = null;
})