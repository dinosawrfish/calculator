let total = 0;

const output = document.querySelector(".output");
const numbers = document.querySelector(".numbers");
const operands = document.querySelector(".operands");

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
// TODO: current output needs to follow selected operand with selected number

// listeners
numbers.addEventListener("click", function(event) {
    output.innerText = selectNumber(output.innerText, event.target.innerText);
});

operands.addEventListener("click", function(event) {
    console.log(event.target.innerText);
    const operand = event.target.innerText;
    const operation = selectOperation(operand)

    const eval = operation(output.innerText, )
})