// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr) {  
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        // i가 0일 때, i가 배열의 최대 크기보다 작다면 i는 1만큼 증가한다 (i = i + 1)
        // 즉 i는 증감을 1에서 부터 배열의 최대 크기까지 <반복>
        total += arr[i] // 배열의 1부터 배열의 최대크기까지 접근하여 전부 더하고 그것을 total에 할당
    } return total;
}

// 위 방법이 클래식하지만 앞으론 FOR..OF 명령문을 사용하도록 하자
function sumArray(arr) {
    let total = 0;
    for (let i of arr) {
      total += i;
    } return total;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 1]));
