function allEvens(numbers) {
    return numbers.every(number => {
        return number % 2 === 0;
    });
}