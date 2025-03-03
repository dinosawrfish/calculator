let total = null;
let num1 = null;
let num2 = null;
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

// listeners
numbers.addEventListener("click", function(event) {
    output.innerText = selectNumber(output.innerText, event.target.innerText);
    num2 = output.innerText;
});

operands.addEventListener("click", function(event) {
    if (operation !== null) {
        if (num1 === null) {
            total = num2;
        }
        else {
            total = operation(parseInt(num1), parseInt(num2));
        }
        num2 = total;
    }

    if (event.target.innerText === "=") {
        output.innerText = total;
    }
    else {
        output.innerText = 0;
    }

    const operand = event.target.innerText;
    operation = selectOperation(operand);
    num1 = num2;
})

backspace.addEventListener("click", function() {
    if (operation !== tallyUp) {
        output.innerText = removeRightDigit(output.innerText);
        num2 = output.innerText;
    }
})

clear.addEventListener("click", function() {
    output.innerText = 0;
    total = num1 = num2 = operation = null;
})