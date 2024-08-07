const total = 0;

const output = document.querySelector(".output");
const numbers = document.querySelector(".numbers");


// What does a calculator do

// TODO: output to show number selected
function selectNumber(output, input) {
    let newNumber = "";

    if (output === "0") {
        newNumber = input;
    } else {
        newNumber = output + input;
    }
    return newNumber;
}
// TODO: output add number to new decimal place when output not zero
// TODO: current output needs to follow selected operand with selected number

// listeners
numbers.addEventListener("click", function(event) {
    output.innerText = selectNumber(output.innerText, event.target.innerText);
});