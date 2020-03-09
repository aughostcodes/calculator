'use strict';

const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');
const equalsButton = document.querySelector('.equals');

let input = [];
let num1;
let num2;
let sign;
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
                console.log(sign);
                console.log(num2);
            }
        }
    }
    return expression = {
        num1,
        num2,
        sign
    }
}

function performOperation() {
    console.log(expression);
}

// performOperation();

// Mathematical functions

function add() {
    return Number(expression.num1) + Number(expression.num2);
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

buttons.addEventListener('click', makeExpression);
equalsButton.addEventListener('click', performOperation);