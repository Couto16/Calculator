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

buttonCalculator_1.addEventListener('click', () => { 
    number += '1'
})
buttonCalculator_2.addEventListener('click', () => {
    number += '2'
})
buttonCalculator_3.addEventListener('click', () => {
    number += '3'    
})
buttonCalculator_4.addEventListener('click', () => {
    number += '4'
})
buttonCalculator_5.addEventListener('click', () => {
    number += '5'
})
buttonCalculator_6.addEventListener('click', () => {
    number += '6'
})
buttonCalculator_7.addEventListener('click', () => {
    number += '7'
})
buttonCalculator_8.addEventListener('click', () => {
    number += '8'
})
buttonCalculator_9.addEventListener('click', () => {
    number += '9'
})
buttonCalculator_0.addEventListener('click', () => {
    number += '0'
})
buttonCalculator_ponto.addEventListener('click', () => {
    number += '.'
})
buttonCalculator_sum.addEventListener('click', () => {
   
})
buttonCalculator_subtracion.addEventListener('click', () => {
    
})
buttonCalculator_multiplication.addEventListener('click', () => {

})
buttonCalculator_division.addEventListener('click', () => {
    
})
buttonCalculator_percentage.addEventListener('click', () => {
    
})
buttonCalculator_reset.addEventListener('click', () => {
    
})
buttonCalculator_equality.addEventListener('click', () => {
    console.log(convertToNumber(number))
}) 

function convertToNumber(number){
    return parseFloat(number)
}
