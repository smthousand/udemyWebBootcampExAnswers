const helloBtn = document.getElementById('hello');
const byeBtn = document.getElementById('goodbye');

helloBtn.addEventListener('click', () => {
    console.log("hello");
})
byeBtn.addEventListener('click', () => {
    console.log("goodbye");
})