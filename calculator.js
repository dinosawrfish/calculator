const total = 0;

const output = document.querySelector(".output");
const numbers = document.querySelector(".numbers");


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
// TODO: current output needs to follow selected operand with selected number

// listeners
numbers.addEventListener("click", function(event) {
    output.innerText = selectNumber(output.innerText, event.target.innerText);
});