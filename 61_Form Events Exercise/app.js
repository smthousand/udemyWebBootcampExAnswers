// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addItem(productInput.value, qtyInput.value);
    productInput.value = '';
    qtyInput.value = '';
})

const addItem = function(productInput, qtyInput) {
    const newItem = document.createElement('li');
    list.appendChild(newItem);
    newItem.innerText = `${qtyInput} ${productInput}`;
}