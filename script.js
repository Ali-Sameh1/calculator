document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const equal = document.querySelector('.equal');
    const clear = document.querySelector('.clear');
    const decimal = document.querySelector('.decimal');
    const currentDisplay = document.querySelector('.current-display');
    const previousDisplay = document.querySelector('.previous-display');


    numbers.forEach ((number) => number.addEventListener('click' , e => {
        handleNumber(e.target.textContent);
        currentDisplay.textContent = currentNumber;
    }))


    operators.forEach( op => op.addEventListener('click' , e => {
        handleOperator(e.target.textContent);
        previousDisplay.textContent = `${previousNumber} ${operator}`;
        currentDisplay.textContent = currentNumber;
    }))


    equal.addEventListener('click' , e => {
        if (currentNumber != ''  && previousNumber != '' ) {
            calculate();
            previousDisplay.textContent = '';
            currentDisplay.textContent = currentNumber;
        }
    })


    clear.addEventListener('click', e => {
        clearDisplay();
        previousDisplay.textContent = '';
        currentDisplay.textContent = '';
    })


    decimal.addEventListener('click', e => {
        addDecimal();
        currentDisplay.textContent = currentNumber;
        
    })

    

})

let previousNumber = '';
let currentNumber = '';
let operator = '';

function handleNumber (num) {
    if (currentNumber.length <= 5) {
        currentNumber += num;
    }
}

function handleOperator (op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate () {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    switch  (operator) {
        case '+' :
            currentNumber = previousNumber + currentNumber;
            break;

        case '-' :
            currentNumber = previousNumber - currentNumber;
            break;
        
        case '*' :
            currentNumber = previousNumber * currentNumber;
            break;

        case '/' :
            currentNumber = previousNumber / currentNumber;
            break;       
    }

    currentNumber = currentNumber.toString();
}



function clearDisplay() {
    previousNumber = '';
    currentNumber = '';
    operator = '';
}


function addDecimal (){
    if (!currentNumber.includes('.')){
        currentNumber += '.';
    }
}