// Validates that the mail meets the format
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

const email = document.querySelector('input');
const menssageInvalid = document.getElementById('message-invalid');
const subscribeButton = document.getElementById('subscribe-button');
const emailSuccess = document.getElementById('email-success');
const cardSuccess = document.getElementById('card-success');
const cardForm = document.getElementById('card-form');
const dismissButton = document.getElementById('dismiss-button');

// Hide / show cards

function toggleCards(){
    cardSuccess.classList.toggle("hidden");
    cardForm.classList.toggle("hidden");
}


// Validar email
subscribeButton.addEventListener("click",() =>{
    // Email valid
    if (validarEmail(email.value)) {
        email.classList.remove("email-invalid");
        email.classList.add("email-valid")
        menssageInvalid.innerText = ""
        emailSuccess.innerText = `${email.value}`;
        toggleCards();
    // Invalid email
    } else {
        email.classList.remove("email-valid");
        email.classList.add("email-invalid");
        menssageInvalid.innerText = "Valid email required"
    }
})

dismissButton.addEventListener("click", toggleCards);
