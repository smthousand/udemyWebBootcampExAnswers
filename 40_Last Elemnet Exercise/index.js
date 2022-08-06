// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
        // return arr.slice(-1)[0]
        // return arr.at(-1); ==> 사용 시 주의 필요
    }
}

console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));