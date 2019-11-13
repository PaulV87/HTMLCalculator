const screenDisplay = document.querySelector(".calculatorDisplay");

const resetBtn = document.querySelector("#clear");
resetBtn.onclick = clearMemory;

const equalsBtn = document.querySelector("#equals");
equalsBtn.onclick = calculation;


let numberArray = new Array();
let currentDisplay = "0";

// register all the button clicks
const numbersBtn = document.querySelectorAll(".numberButton");

numbersBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        printNumber(this.value);
    });
}) 

// Block code to print the number to the calculator screen starts here
function printNumber(value){
    // gets the current value displayed. It should always be zero on the first loop.
    currentDisplay = screenDisplay.value;
    
    if (currentDisplay.length < 10) {
        // Makes is so that numbers cant start with 0
        if (currentDisplay === "0" && value !== "0"){
                currentDisplay = value;                       
        } else if (currentDisplay !=="0") {
            currentDisplay += value;
        };
    };    

    screenDisplay.value = currentDisplay;   
}

// Block code for Operator buttons starts here
const operatorsBtn = document.querySelectorAll(".operator");

operatorsBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        addOperators(this.value);
    })
})

// Function that runs when the operator buttons( */+-) are click
function addOperators(operator){   
   
    numberArray.push(parseFloat(currentDisplay));
    numberArray.push(operator);
    resetDisplay();
    if (numberArray.length > 3){
        let maths = operations(numberArray[1], numberArray[0], numberArray[2])
        console.log("Current Answer:" + maths);
        numberArray.splice(0, 3, maths);
    }
    console.log(numberArray);
}

// Reset the calculator display
function resetDisplay(){    
    screenDisplay.value = 0;
    currentDisplay = "0"
}

// clears the memory and resets the display
function clearMemory(){
    screenDisplay.value = 0;
    currentDisplay = "0"
    numberArray = new Array();
}

// function that runs when the = button is pressed
function calculation(){    
    numberArray.push(parseFloat(currentDisplay));

    currentDisplay = operations(numberArray[1], numberArray[0], numberArray[2])
    console.log("Current Answer:" + currentDisplay);
    numberArray.splice(0, 3, currentDisplay);
    numberArray = new Array();
    screenDisplay.value = currentDisplay;    
}

// Do all of the operations
function operations(operator, number1, number2){
    switch (operator){
        case "*":
            return number1 * number2;
        case "/":
            return number1 / number2;
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
    }
}


// Code for a scientific calculator that follows the operations order */+-
/*
for (let i = (numberArray.length - 1); i > 0; i--){
    
        if (numberArray[i] === "*"){
            console.log("for loop:" + i);
       
            console.log(i + 1);
            let removedMultiply = numberArray.splice(i - 1, 3);
            console.log(removedMultiply);
            let multiply = removedMultiply[0] * removedMultiply[2];
            console.log(multiply);
            numberArray.splice((i - 1), 0, multiply);
            console.log(numberArray);
        }
    }
    
    for (let i = (numberArray.length - 1); i > 0; i--){
        
        if (numberArray[i] === "/"){
            console.log("for loop:" + i);
       
            console.log(i + 1);
            let removedMultiply = numberArray.splice(i - 1, 3);
            console.log(removedMultiply);
            if (removedMultiply[2] === 0){
                console.log("To Infinity and beyond.")
                removedMultiply[2] = 1;
            }
            let multiply = removedMultiply[0] / removedMultiply[2];
            console.log(multiply);
            numberArray.splice((i - 1), 0, multiply);
            console.log(numberArray);
        }
    }
    
    for (let i = (numberArray.length - 1); i > 0; i--){
        
        if (numberArray[i] === "+"){
            console.log("for loop:" + i);
       
            console.log(i + 1);
            let removedMultiply = numberArray.splice(i - 1, 3);
            console.log(removedMultiply);
            let multiply = removedMultiply[0] + removedMultiply[2];
            console.log(multiply);
            numberArray.splice((i - 1), 0, multiply);
            console.log(numberArray);
        }
    }
    
    for (let i = (numberArray.length - 1); i > 0; i--){
        
        if (numberArray[i] === "-"){
            console.log("for loop:" + i);
       
            console.log(i + 1);
            let removedMultiply = numberArray.splice(i - 1, 3);
            console.log(removedMultiply);
            let multiply = removedMultiply[0] - removedMultiply[2];
            console.log(multiply);
            numberArray.splice((i - 1), 0, multiply);
            console.log(numberArray);
        }
    }
*/