// Let's try writing a for loop that counts down, rather than up. Please write a for loop that prints the following numbers (in this order):
// 25
// 20
// 15
// 10
// 5
// 0

// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0

for(let i = 25; i >= 0; i -= 5) {
    // i는 25다 (시작점)
    // i는 0보다 크거나 같다 (끝점)
    // i는 5씩 감소되는 것과 같다 (반복)
    console.log(i);
} 