const myForm = document.getElementById('#myForm')
const nameInput = document.getElementById('#name');
const emailInput = document.getElementById('#email');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
    e.preventDefault();
console.log(nameInput.value);
}