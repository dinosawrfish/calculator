let total = 0;
let num1 = 0;
let num2 = 0;
let operation = null;

const output = document.querySelector(".output");
const numbers = document.querySelector(".numbers");
const operands = document.querySelector(".operands");
const backspace = document.querySelector(".backspace");
const clear = document.querySelector(".clear");

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

// listeners
numbers.addEventListener("click", function(event) {
    output.innerText = selectNumber(output.innerText, event.target.innerText);
    num2 = output.innerText;
});

operands.addEventListener("click", function(event) {

    console.log(event.target.innerText);
    if (operation !== null) {
        total = operation(parseInt(num1), parseInt(num2));
        num2 = total;
        console.log(total, "total");
    }

    const operand = event.target.innerText;
    operation = selectOperation(operand);
    num1 = num2;
    console.log(operation, num1);

    if (event.target.innerText === "=") {
        output.innerText = total;
    }
    else {
        output.innerText = 0;
    }
})

backspace.addEventListener("click", function() {
    output.innerText = removeRightDigit(output.innerText);
    num2 = output.innerText;
    // do not allow backspace if the current operation is an equal
})

clear.addEventListener("click", function() {
    output.innerText = 0;
    total = 0;
    num1 = 0;
    num2 = 0;
    operation = null;
})