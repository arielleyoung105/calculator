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
const operatorBtns = document.querySelectorAll('#operators div')
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
    if (e.target.className === 'button' && operation === null) {
        operand1 += e.target.innerText;
        operand1 = Number(operand1);
        resultSection.innerHTML = operand1;
    } else if (e.target.className === 'button' && operation !== null) {
        operand2 += e.target.innerText;
        operand2 = Number(operand2);
        resultSection.innerHTML = operand2;
    }
});

clear.addEventListener("click", e => {
    if (e.target.className === 'button clear') {
        operatorBtns.forEach(btn => btn.style.background = '#ececec');
        operand1 = "";
        operand2 = "";
        operation = null;
        resultSection.innerHTML = 0;
    }
});

function unpressBtn(e) {
    operatorBtns.forEach(btn => btn.style.background = '#ececec');
    e.target.style.background = '#ccc';
}

operatorsSection.addEventListener("click", e => {
    if (e.target.innerText === '+') {
        unpressBtn(e);
        operation = add;
        console.log(operation);
    } else if (e.target.innerText === '-') {
        unpressBtn(e);
        operation = subtract;
    } else if (e.target.innerText === '*') {
        unpressBtn(e);
        operation = multiply;
    } else if (e.target.innerText === '/') {
        unpressBtn(e);
        operation = divide;
    }

    if (e.target.className === 'button equals') {
        operatorBtns.forEach(btn => btn.style.background = '#ececec');
        let result = operate(operand1, operand2, operation);
        resultSection.innerText = result;
        operand1 = result;
        operand2 = '';
    }

});

/* 

    TODO: Make it so you can continue the operation without having to 
    press '=' first

 */
