'use strict';

const input = [];
const operator = [];
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function (event) {
    console.log(event.target.textContent);

    if (event.target.classList.contains('operator')) {
        operator.push(event.target.textContent);
        console.log('an operator');
        console.log(operator);
    }
})


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