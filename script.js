
function add(num1, num2) {
    return parseInt(num1) + parseInt(num2); 
}

function subtract(num1, num2) {
    return num1 - num2; 
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {

    if (num2 == 0) alert("Can't divide by 0!");

    else{
        return (num1 / num2).toFixed(2); 
    }
}


let firstNumber; 
let operator; 
let secondNumber;  
let displayNumber; 

function operate(operator, num1, num2) {

    if (operator == "+") return add(num1, num2);
    else if (operator == "-") return subtract(num1, num2); 
    else if (operator=="*") return multiply(num1, num2); 
    else return divide(num1,num2);  
}

let output = document.querySelector(".screen")
let keys = document.querySelectorAll(".number")

keys.forEach((key) => key.addEventListener("click", function(){

    if(operator == undefined && firstNumber == undefined) {
        firstNumber = key.textContent;
        console.log(firstNumber)
        displayNumber = firstNumber;
    }

    else if (operator == undefined && firstNumber != undefined) {
        firstNumber += key.textContent; 
        console.log(firstNumber); 
        displayNumber = firstNumber;
    }

    else if (operator != undefined && secondNumber == undefined) {
        secondNumber = key.textContent; 
        displayNumber = secondNumber;
        console.log(secondNumber);
        
    }

    else {
        secondNumber += key.textContent; 
        displayNumber = secondNumber;
        console.log(secondNumber);
    }


    output.innerHTML = displayNumber;
    
}))

let operators = document.querySelectorAll(".operator"); 

operators.forEach((op) => op.addEventListener("click", function() {

    operator = op.textContent; 
    console.log("Ny operator er: " + operator); 

}))



let clear = document.querySelector("#clear"); 

clear.addEventListener("click", function() {
    output.innerHTML = ""; 
    firstNumber = undefined; 
    secondNumber = undefined; 
    operator = undefined; 
})

let equals = document.querySelector("#equals"); 

equals.addEventListener("click", function() {

    console.log("Første tall er: " + firstNumber + " Andre nummer er: " + secondNumber); 

    let calculation = operate(operator, firstNumber, secondNumber)

    output.innerHTML = calculation; 
    firstNumber = calculation; 
    secondNumber = undefined; 
    operator = undefined; 

})




