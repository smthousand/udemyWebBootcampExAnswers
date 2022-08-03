const mystery = 'PRE77Y'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){ 
    // mystery의 0번째 알파벳은 'P', mystery의 글자수는 5초과, mystery는 7이라는 스트링을 포함하지 않는다의 부정연산자니까 → 포함한다
    // 위 세가지 조건이 전부 참인 단어는 PRE77Y(7=T), PERFEC7 등등
    console.log("YOU GOT IT!!!");
}