'use strict';

const buttons = document.querySelector('.buttons');

let numericalInput1 = [];
let numericalInput2 = [];
let num1;
let operator = [];

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

buttons.addEventListener('click', function (event) {
    console.log(event.target.textContent);

    if (event.target.classList.contains('number')) {
        numericalInput1.push(event.target.textContent);
        console.log(numericalInput1);
    }

    if (event.target.classList.contains('operator')) {
        operator.push(event.target.textContent);
        numericalInput1 = Number(numericalInput1.join(''));
        num1 = numericalInput1;
        console.log(numericalInput1);
        console.log(num1);
        console.log(operator);
    }

 // switch statement for math functions (add, sub, etc);
})

// Mathematical functions

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
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

function multiply(args) {
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