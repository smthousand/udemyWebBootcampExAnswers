function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!")
    }
}

let dice = Math.floor(Math.random() * 6) + 1;
isSnakeEyes(dice, dice);