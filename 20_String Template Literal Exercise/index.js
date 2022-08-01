// I've provided you with two variables, die1 and die2 which represent six-sided dice.  Each variable holds a randomly generated integer from 1 to 6.  Please create a new variable called roll, which will be a string that displays each die as well as their sum.  Follow this pattern:
// die1: 3
// die2: 5
// roll: "You rolled a 3 and a 5. They sum to 8"
// Here is another example with different numbers:
// die1: 6
// die2: 4,
// roll: You rolled a 6 and a 4. They sum to 10"

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2};`