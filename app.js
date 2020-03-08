'use strict';

const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');
const equalsButton = document.querySelector('.equals');

let input = [];
let num1;
let num2;
let sign;
let result;
let expression = {};

/*
    Take a numerical input by user clicking on numbers,
    store each number in an array,
    and join the array together for one whole number.
    If an operator is clicked,
    any numerical input up to then is stored as the first num.
    ie, 2 +. 345 -
    Get second input like the first,
    and perform the operator between num1 and num2
    when equals is clicked.

    If operator is multiply and 0 is either num1 or num2,
    return 0.


*/



function makeExpression(event) {
    let numericalInput1 = [...input];
    let numericalInput2 = [...input];
    let operator = [...input];

    if (event.target.classList.contains('number') || event.target.classList.contains('operator')) {
        input.push(event.target.textContent);
    } else if (event.target.classList.contains('equals')) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '/' ||
                input[i] === 'X' ||
                input[i] === '-' ||
                input[i] === '+'
            ) {
                numericalInput1 = numericalInput1.splice(0, i);
                numericalInput2 = numericalInput2.splice(i + 1);
                num1 = Number(numericalInput1.join(''));
                num2 = Number(numericalInput2.join(''));
                sign = String(operator.splice(i, 1));
                console.log(num1);
                console.log(num2);
                console.log(sign);
            }
        }
    }
    return expression = {
        num1,
        num2,
        sign
    }
}

function doMath() {
    if (expression.sign === '+') {
        result = add();
    } else if (expression.sign === '-') {
        result = subtract();
    } else if (expression.sign === 'X') {
        result = multiply();
    } else if (expression.sign === '/') {
        result = divide();
    }
    // console.log(result);
    return result;
}


// Mathematical functions

function add() {
    return expression.num1 + expression.num2;
}

function subtract() {
    return expression.num1 - expression.num2;
}

function multiply() {
    return expression.num1 * expression.num2;
}

function divide() {
    return expression.num1 / expression.num2;
}

function sum(args) {
    if (args.length === 0) {
        return 0;
    } else {
        let result = args.reduce((acc, val) => {
            return acc + val;
        })
        return result;
    }
}

function chainMultiply(args) {
    let result = args.reduce((acc, val) => {
        return acc * val;
    })
    return result;
}

function power(base, expo) {
    let total = 1;
    for (let i = 0; i < expo; i++) {
        total *= base;
    }
    return total;
}

function factorial(num) {
    let result = 1;
    if (num === 0) {
        return 1;
    } else {
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

function operate(num1, num2, operator) {
    let total;
    if (operator === '+') {
        total = add(num1, num2);
    }
    if (operator === '-') {
        total = subtract(num1, num2);
    }
    return total;
}

// switch statement for math functions (add, sub, etc);
//    switch (sign) {
//     case '+':
//         add(num1, num2);
//         break;
//     case '-':
//         subtract(num1, num2);
//         break;
// }

buttons.addEventListener('click', makeExpression);
equalsButton.addEventListener('click', doMath);