//Q1: Create a sample application in Typescript to find the factorial of a number. 

var num:number = 5; 
var i:number; 
var factorial = 1; 

for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log(factorial);