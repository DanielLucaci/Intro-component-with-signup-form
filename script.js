const firstNameInput = document.getElementById('firstname');
const lastNameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const isEmpty = (e) => e.value === '';

const form = document.querySelector('form');

const isValidEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
} 

const toggleErrorIcon = (inputEl) => {
    const iconError = inputEl.nextSibling.nextSibling;
    const iconErrorStyle = getComputedStyle(inputEl.nextSibling.nextSibling);
    const { display } = iconErrorStyle;
    if(display === 'none') 
        iconError.style.display = 'inline';
    else 
        iconError.style.display = 'none';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check if the first name is valid 
    if(isEmpty(firstNameInput))
        toggleErrorIcon(firstNameInput);

    // Check if the last name is valid 

    // Check if the email is valid 

    // Check if the password is valid 

    console.log('Form was submitted');
})