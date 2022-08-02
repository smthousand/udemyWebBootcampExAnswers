// Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).   
// Write your code between the two comments in index.js
// You will automatically have access to a variable called phrase.  Please do not try and define phrase or change phrase in any way! I will be setting the value of phrase when I test your code.
// Your job is to print out a color based upon the following rules:
// if phrase is 'stop', you should print out 'red'
// if phrase is 'slow', you should print out 'yellow'
// if phrase is 'go', you should print out 'green'
// if phrase is anything else, you should print out 'purple'

function getColor(phrase){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (phrase === 'stop') {
        console.log('red');
    } else if (phrase === 'slow') {
        console.log('yellow');
    } else if (phrase === 'go') {
        console.log('green');
    } else {
        console.log('purple');
    }
    //AND THIS LINE ↑↑↑↑↑
}