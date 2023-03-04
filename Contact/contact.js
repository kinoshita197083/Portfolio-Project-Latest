const sendBtn = document.querySelector('.submit-btn'),
    userName = document.querySelector('#name'),
    email = document.querySelector('#email'),
    message = document.querySelector('#message'),
    snackbar = document.querySelector('.snackbar'),
    spinner = document.querySelector('.loading')

const url = 'https://rfnnynq05f.execute-api.ap-southeast-2.amazonaws.com/prod/portfolio';

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    submitForm();
})

//Check if all fields are filled
function formValidation() {
    return userName.value && email.value && message.value
}

//Check if any unfilled
function incompletedForm() {
    return userName.value || email.value || message.value
}

//Display snackbar for 2 sec
function snackBarDisplay(text) {
    snackbar.textContent = text;
    snackbar.classList.add('show');
    setTimeout(() => { snackbar.classList.remove('show') }, 2000);
}

//Highlight in red if unfilled
function fieldValidationError(element) {
    if (element) {
        element.style.border = '1px solid tomato';
    }
}

//Reset the form
function resetForm() {
    userName.style.border = 'none';
    userName.value = '';

    message.style.border = 'none';
    message.value = '';

    email.style.border = 'none';
    email.value = '';
}

//Validate email address
function validateEmailFormat(email) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return mailFormat.test(email);
}

async function postMessage() {
    const response = await fetch(url, {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            posterName: userName.value,
            posterEmail: email.value,
            postMsg: message.value
        })
    });
    return response
}

function displayLoading() {
    spinner.classList.add('show');
}

function hideLoading() {
    spinner.classList.remove('show');
}

// Validate and Submit
async function submitForm() {
    if (formValidation()) {
        //If all filled, then check email format
        if (validateEmailFormat(email.value)) {
            displayLoading();
            let res = await postMessage().catch(() => snackBarDisplay('Connection error: Please try again in a while'));
            res ? (hideLoading(), snackBarDisplay('Message has been sent successfully'), resetForm()) : console.log('error');
        } else {
            snackBarDisplay('Invalid Email Address');
            fieldValidationError(email);
        };

    } else if (incompletedForm()) {

        //Highlight the empty field
        !userName.value ? fieldValidationError(userName) : null;
        !email.value ? fieldValidationError(email) : null;
        !message.value ? fieldValidationError(message) : null;

        snackBarDisplay('Seems like you forgot a field');
    } else {
        snackBarDisplay('Leave a message to me');
    }
}