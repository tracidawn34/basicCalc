let display = document.querySelector('#result')
let number = document.querySelectorAll('.numbers')
let clear = document.querySelector('#clear')
let equal = document.querySelector('#equalTo')
let operations = document.querySelectorAll('.operation')
let decimal = document.querySelector('#decimal')
let input = document.getElementById('inputBox');

let firstNumber = '';
let operation = '';
let secondNumber = '';
let result = ''


clear.addEventListener('click', clearScreen )

for(let num of number){
    num.addEventListener('click', numberPressed)}


for(let op of operations){
    op.addEventListener('click', operationPressed)}
    

 equal.addEventListener('click', calcResult)

 decimal.addEventListener('click', decimalOp)

function calcResult() {
    
  }

  function operationPressed(op) {
    operation = op.target.value
  }

  function numberPressed(number) {
    
  }

  function decimalOp(){

  }

function clearScreen(){
    document.getElementById('clear').value = ""
}

function updateScreen() {
    display.innerText = firstNumber + operation + secondNumber
}
  

