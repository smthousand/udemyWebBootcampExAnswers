// Time for something a little bit different. I've given you a nested conditional that uses a variable called num.  I would like for you to change the value of num to another number, so that "YOU GOT ME!" is printed out. Don't change anything other than the value of num!  Leave the conditional alone!

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// DO NOT TOUCH ANYTHING BELOW (please)
if(num <= 100) { 
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
            // num은 100초과 103미만의 짝수 숫자, 즉 답은 102
            // 또한 const로 선언되었으므로 재할당이 아닌 값 자체를 수정해주어야 함
        }
    }
}