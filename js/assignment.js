const myForm = document.getElementById('#myForm').value;
const nameInput = document.getElementById('#name').value;
const emailInput = document.getElementById('#email');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
    e.preventDefault();
console.log(nameInput.value);
}