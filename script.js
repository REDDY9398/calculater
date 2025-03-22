let currentInput = '';




function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}




function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    updateDisplay();
}




function appendDecimal() {
    // Prevent multiple decimals in a number
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}




function clearDisplay() {
    currentInput = '';
    updateDisplay();
}




function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}









