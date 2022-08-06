function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1); // == word.substring(1);
    // return `${word[0].toUpperCase()}${word.slice(1)}`; ==> 템플릿 리터럴
}

console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));