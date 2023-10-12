let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let currentTotal = 0;
let operatorClicked = false;

function appendToDisplay(value) {
    if (operatorClicked) {
        display.value = '';
        operatorClicked = false;
    }
    currentInput += value;
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    currentOperator = '';
    currentTotal = 0;
}

function calculateResult() {
    if (currentOperator === '+') {
        currentTotal += parseFloat(currentInput);
    } else if (currentOperator === '-') {
        currentTotal -= parseFloat(currentInput);
    } else if (currentOperator === '*') {
        currentTotal *= parseFloat(currentInput);
    } else if (currentOperator === '/') {
        currentTotal /= parseFloat(currentInput);
    } else {
        currentTotal = parseFloat(currentInput);
    }

    display.value = currentTotal;
    currentInput = '';
    currentOperator = '';
    operatorClicked = true;
}
