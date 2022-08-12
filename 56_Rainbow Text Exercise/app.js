const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const singleLetters = document.querySelectorAll('span');
let color = 0;
for (let singleLetter of singleLetters) {
    singleLetter.style.color = colors[color];
    color++;
}

