// I've provided you with a word variable, set to "skateboard".  Your goal is to use string methods on word, so that you end up with the string "beard". 
// Use a string method to extract the "board" part of "skateboard"  (using the slice method)
// Replace the "o" in board with an "e" (using the replace method)
// Save the result in a variable called facialHair
// This is another exercise that is very easy to cheat! I can't verify that you actually call the correct string methods.  You could just copy and paste the answer into the variable. BUT IF YOU DO THAT YOU WON'T BE ABLE TO LIVE WITH THE GUILT.  IT WILL TEAR YOU APART FOR AS LONG AS YOU LIVE! So, please follow the spirit of the exercise :) 

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialHair = word.slice(5, 10).replace("o", "e");