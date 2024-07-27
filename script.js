let operator = '';
let previousNumber = '';
let currentNumber = '';
let result = '';


const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')

const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');


const previousDisplay = document.querySelector('.previous-display');
const currentDisplay = document.querySelector('.current-display');

numbers.forEach ((number) => number.addEventListener('click' , e => {
    handleNumber(e.target.textContent);
    currentDisplay.textContent = currentNumber
}))

operators.forEach(op => op.addEventListener('click' , e => {
    handleOperator(e.target.textContent);
    previousDisplay.textContent = `${previousNumber} ${operator}`;
    currentDisplay.textContent = currentNumber;
}))


equal.addEventListener('click' , ()=> {
    calculate();
    previousDisplay.textContent = '';
    currentDisplay.textContent = result;
})


clear.addEventListener('click' , ()=>{
    clearDisplay();
    previousDisplay.textContent = '';
    currentDisplay.textContent = '';
})

function handleNumber (num){
    if (currentNumber.length <= 5){
        currentNumber += num

    }
}


function handleOperator (op){
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}


function calculate (){
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if (operator === '+'){
        result = previousNumber + currentNumber;
    }
    else if (operator === '-'){
        previousNumber -= currentNumber
    }
    else if (operator === 'x'){
        previousNumber *= currentNumber
    }
    else {
        previousNumber /= currentNumber
    }
}


function clearDisplay () {
    currentNumber = '';
    previousNumber = '';
    operator = '';
}