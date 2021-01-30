/* 

1) Wait for user input

2) When operator is selected: 
    - Change input from string to number and set it to variable
    - Store corresponding operator function in variable
    - Clear screen
    - Wait for next user input

3) When 'equals' button is clicked:
    - Store second input to another variable
    - Plug both user inputs into stored operator function

4) Display result of operator function

*/

const numbersSection = document.querySelector('#numbers');
const resultSection = document.querySelector('#result');
const operatorsSection = document.querySelector('#operators');
const clear = document.querySelector('#clear');
let operand1 = "";
let operand2 = "";
let operation = null;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, func) {
    return func(num1, num2);
}

numbersSection.addEventListener("click", e => {
    if (e.target.className === 'button') {
            // console.log(e.target.innerText);
            operand1 += e.target.innerText;
            operand1 = Number(operand1);
            resultSection.innerHTML = operand1;
    }
});

clear.addEventListener("click", e => {
    if (e.target.className === 'button clear') {
        operand1 = 0;
        resultSection.innerHTML = 0;
    }
});

operatorsSection.addEventListener("click", e => {
    if (e.target.className === 'button add') {
        // operation =
    }

    if (e.target.className === 'button equals') {
        
    }

});

