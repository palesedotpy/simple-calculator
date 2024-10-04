// Input field html object
const display = document.getElementById("display");
const operationCharacters = ['+', '-', '*', '/', '.']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function appendOnDisplay(string) {
    /* Check if first number is 0, 
    if not appened pressed number to display, 
    if it does chek if the pressed button is not a sign, 
    if not write pressed number */
    let value = display.value == 0 ? (!(operationCharacters.includes(string)) ? string : display.value) : display.value+string ;
    let lastElementInDisplay = display.value[display.value.length-1];
    let displayOutput = true;

    // Check if user try to insert double operation sign
    if (operationCharacters.includes(string) && operationCharacters.includes(lastElementInDisplay)) {
        displayOutput = false;
    }

    // Display evaluated value
    if (displayOutput) {
        display.value = value;
    }
}

function clearDisplay() {
    // Clear display overwriting it with 0
    display.value = 0;
}

function evaluateEquation() {
    // If input is invalid, return an error
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = `Error`;
    }
}

