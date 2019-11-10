const screenDisplay = document.querySelector(".calculatorDisplay");
const oneBtn = document.querySelector("#one");

const resetBtn = document.querySelector("#clear");
resetBtn.onclick = clearMemory;

const equalsBtn = document.querySelector("#equals");
equalsBtn.onclick = calculation;

//const plusBtn = document.querySelector("#plus");
//plusBtn.onclick = addBtnClick;

let numberArray = new Array();
let currentDisplay = "0";
// register all the button clicks
const numbersBtn = document.querySelectorAll(".numberButton");

numbersBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        printNumber(this.value);
    });
}) 

// TODO: Print numbers to screen
function printNumber(value){
    console.log(value);
    // gets the current value displayed. It should always be zero on the first loop.
    currentDisplay = screenDisplay.value;
    
    if (currentDisplay.length < 10) {
        if (currentDisplay === "0" && value !== "0"){
                currentDisplay = value;                       
        } else if (currentDisplay !=="0") {
            currentDisplay += value;
        };
    };        
    screenDisplay.value = currentDisplay;   
}

const operatorsBtn = document.querySelectorAll(".operator");
console.log(operatorsBtn);

operatorsBtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        addOperators(this.value);
    })
})

function addOperators(operator){   
    numberArray.push(parseInt(currentDisplay));
    numberArray.push(operator);
    resetDisplay();
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

function calculation(){
    
    numberArray.push(parseInt(currentDisplay));
   
    numberArray.forEach(function(number){
        console.log(numberArray);
    })
    
    console.log(numberArray)
    resetDisplay();
}