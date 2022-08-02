// Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).   
// Write your code between the two comments in index.js
// You will automatically have access to a variable called num.  Please do not try and define num or change num in any way! I will be setting the value of num when I test your code, so that I can test different outcomes
// If num is an even number, print out "even".  Don't do anything if num is an odd number.

function isEven(num){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (num % 2 === 0) { // num을 2로 나눗셈 했을 때 나머지가 0과 같을 때 짝수
        console.log("even");
    }
    
//    if(num % 2 === 1) { // num을 2로 나눗셈 했을 때 나머지가 1과 같을 때 홀수
//        console.log("odd")
//    }
   
    //AND THIS LINE ↑↑↑↑↑
}