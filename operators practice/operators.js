
let numArray =  [6, "*", 3, "-", 6, "*", 5, "+", 5, "*", 7];
console.log(numArray.length)
console.log(numArray);


for (let i = (numArray.length - 1); i > 0; i--){
    
    if (numArray[i] === "*"){
        console.log("for loop:" + i);
   
        console.log(i + 1);
        let removedMultiply = numArray.splice(i - 1, 3);
        console.log(removedMultiply);
        let multiply = removedMultiply[0] * removedMultiply[2];
        console.log(multiply);
        numArray.splice((i - 1), 0, multiply);
        console.log(numArray);
    }
}

for (let i = (numArray.length - 1); i > 0; i--){
    
    if (numArray[i] === "/"){
        console.log("for loop:" + i);
   
        console.log(i + 1);
        let removedMultiply = numArray.splice(i - 1, 3);
        console.log(removedMultiply);
        let multiply = removedMultiply[0] / removedMultiply[2];
        console.log(multiply);
        numArray.splice((i - 1), 0, multiply);
        console.log(numArray);
    }
}

for (let i = (numArray.length - 1); i > 0; i--){
    
    if (numArray[i] === "+"){
        console.log("for loop:" + i);
   
        console.log(i + 1);
        let removedMultiply = numArray.splice(i - 1, 3);
        console.log(removedMultiply);
        let multiply = removedMultiply[0] + removedMultiply[2];
        console.log(multiply);
        numArray.splice((i - 1), 0, multiply);
        console.log(numArray);
    }
}

for (let i = (numArray.length - 1); i > 0; i--){
    
    if (numArray[i] === "-"){
        console.log("for loop:" + i);
   
        console.log(i + 1);
        let removedMultiply = numArray.splice(i - 1, 3);
        console.log(removedMultiply);
        let multiply = removedMultiply[0] - removedMultiply[2];
        console.log(multiply);
        numArray.splice((i - 1), 0, multiply);
        console.log(numArray);
    }
}

console.log(numArray);