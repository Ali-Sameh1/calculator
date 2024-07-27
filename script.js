let operator = '';
let previousNumber = '';
let currentNumber = '';


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
    if (currentNumber != '' && previousNumber != ''){
        calculate();
        previousDisplay.textContent = '';
        currentDisplay.textContent = previousNumber;
    }
    
})


clear.addEventListener('click' , ()=>{
    clearDisplay();
    previousDisplay.textContent = '';
    currentDisplay.textContent = '';
})


decimal.addEventListener('click' , ()=> {
    addDecimal();
    currentDisplay.textContent = currentNumber
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
        previousNumber += currentNumber;
        currentNumber = previousNumber;
    }
    else if (operator === '-'){
        previousNumber -= currentNumber;
        currentNumber = previousNumber;
    }
    else if (operator === 'x'){
        previousNumber *= currentNumber;
        currentNumber = previousNumber;
    }
    else {
        previousNumber /= currentNumber;
        currentNumber = previousNumber;
    }

    previousNumber = roundNumber(previousNumber);
    currentNumber = previousNumber;

    previousNumber = previousNumber.toString();
    currentNumber = currentNumber.toString();
}


function clearDisplay () {
    currentNumber = '';
    previousNumber = '';
    operator = '';
}


function roundNumber (num){
    return Math.round(num * 100000)/100000 ;
}


function addDecimal (){
    if (!currentNumber.includes('.')){
        currentNumber += '.';
    }
}