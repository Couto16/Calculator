const inputValue = document.getElementById('inputValue');
const buttonCalculator_1 = document.querySelector('.one');
const buttonCalculator_2 = document.querySelector('.two');
const buttonCalculator_3 = document.querySelector('.three');
const buttonCalculator_4 = document.querySelector('.four');
const buttonCalculator_5 = document.querySelector('.five');
const buttonCalculator_6 = document.querySelector('.six');
const buttonCalculator_7 = document.querySelector('.seven');
const buttonCalculator_8 = document.querySelector('.eight');
const buttonCalculator_9 = document.querySelector('.nine');
const buttonCalculator_0 = document.querySelector('.zero');
const buttonCalculator_ponto = document.querySelector('.point');
const buttonCalculator_multiplication = document.querySelector('.multiplication');
const buttonCalculator_division = document.querySelector('.division');
const buttonCalculator_sum = document.querySelector('.sum');
const buttonCalculator_subtracion = document.querySelector('.subtracion');
const buttonCalculator_percentage = document.querySelector('.percentage');
const buttonCalculator_parentheseLeft = document.querySelector('.parentheseLeft');
const buttonCalculator_parentheseRight = document.querySelector('.parentheseRight');
const buttonCalculator_equality = document.querySelector('.equality');
const buttonCalculator_reset = document.querySelector('.reset');

let number = '';
let operation = [];
let cont;
let result = 0;
let firstTime = true;
let sum = false;
let subtracion = false;
let division = false;
let percentage = false;
let multiplication = false;

buttonCalculator_1.addEventListener('click', () => {
    number += '1'
    inputValue.value = number
})
buttonCalculator_2.addEventListener('click', () => {
    number += '2'
    inputValue.value = number
})
buttonCalculator_3.addEventListener('click', () => {
    number += '3'
    inputValue.value = number
})
buttonCalculator_4.addEventListener('click', () => {
    number += '4'
    inputValue.value = number
})
buttonCalculator_5.addEventListener('click', () => {
    number += '5'
    inputValue.value = number
})
buttonCalculator_6.addEventListener('click', () => {
    number += '6'
    inputValue.value = number
})
buttonCalculator_7.addEventListener('click', () => {
    number += '7'
    inputValue.value = number
})
buttonCalculator_8.addEventListener('click', () => {
    number += '8'
    inputValue.value = number
})
buttonCalculator_9.addEventListener('click', () => {
    number += '9'
    inputValue.value = number
})
buttonCalculator_0.addEventListener('click', () => {
    number += '0'
    inputValue.value = number
})
buttonCalculator_ponto.addEventListener('click', () => {
    number += '.'
    inputValue.value = number
})
buttonCalculator_sum.addEventListener('click', () => {
    if (number != '') {
        operation.push(convertToNumber(number))
        number = ''
        inputValue.value = ''
    }
    sum = true
})
buttonCalculator_subtracion.addEventListener('click', () => {
    if (number != '') {
        operation.push(convertToNumber(number))
        number = ''
        inputValue.value = ''
    }
    subtracion = true
})
buttonCalculator_multiplication.addEventListener('click', () => {
    if (number != '') {
        operation.push(convertToNumber(number))
        number = ''
        inputValue.value = ''
    }
    multiplication = true
})
buttonCalculator_division.addEventListener('click', () => {
    if (number != '') {
        operation.push(convertToNumber(number))
        number = ''
        inputValue.value = ''
    }
    division = true
})
buttonCalculator_percentage.addEventListener('click', () => {
    if (number != '') {
        operation.push(convertToNumber(number))
        number = ''
        inputValue.value = ''
    }
    percentage = true
})
buttonCalculator_reset.addEventListener('click', () => {
    number = ''
    result = 0
    firstTime = true
    inputValue.value = ''
    console.log("Calculator clean")
})
buttonCalculator_equality.addEventListener('click', () => {
    if (number != '') {
        operation.push(convertToNumber(number))
        number = ''
    }
    console.log("Array operation: " + operation)
    if (sum) {
        for (let value of operation) {
            result += value
        }
        sum = false;
        firstTime = false
    } else if (subtracion) {
        for (let value of operation) {
            if (firstTime) {
                result = operation[0] * 2
                firstTime = false
            }
            result -= value
        }
        subtracion = false;
    } else if (multiplication) {
        for (let value of operation) {
            if (firstTime) {
                result = 1
                firstTime = false
            }
            result *= value
        }
        multiplication = false
    } else if (division) {
        for (let value of operation) {
            if (firstTime) {
                result = operation[0] * operation[0]
                firstTime = false
            }
            result /= value
        }
        division = false
    } else if (percentage) {

        let percentageCorrectionFactor = '1'

        if (result != 0) {
            cont = 0;
        } else {
            cont = 1;
        }

        while (cont < operation.length) {
            cont++;
            percentageCorrectionFactor = percentageCorrectionFactor + '00'
        }

        for (let value of operation) {
            if (firstTime) {
                result = 1
                firstTime = false
            }
            result *= value
        }
        percentageCorrectionFactor = Number(percentageCorrectionFactor)
        result = result / percentageCorrectionFactor
        percentage = false
    }
    operation = []
    inputValue.value = result
    console.log("resultado: " + result)
})

function convertToNumber(number) {
    return parseFloat(number)
}
