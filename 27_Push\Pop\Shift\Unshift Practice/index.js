// I've provided you with an array called planets. Unfortunately, I'm an idiot who doesn't know much about our solar system and I made some mistakes.  Please help me fix the planets array!  Using the array methods we just learned...
// Remove the first element, "The Moon", from the planets array.  The moon is not a planet!
// Add in "Saturn" at the very end of the planets array
// Add "Mercury" as the first element in the planets array.
// At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]
// (This one is super easy to cheat on.  Please use the array methods we just covered, rather than simply changing the values in planets directly)

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift();
planets.push('Saturn');
planets.unshift('Mercury');