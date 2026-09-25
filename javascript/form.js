let form = document.getElementById("my-form");
form.first_name.focus();

function validateForm(event) {
    event.preventDefault(); // disable form submission
    
    if (!checkRequiredFields()) {

        displayError('Ensure all required fields are filled.', form.error_position.value);
        return;
    }

    // submit the form 
    form.submit()
}

function checkRequiredFields() {
    let requiredFields = ["first_name", "last_name", "dob"];
    for (let field of requiredFields) {
        if (!form[field].value) {
            return false;
        }
    }
    return true;
}

function displayError(msg = "Oops! Please fill out all required fields.", position="top", duration = 3000) {
    let divElement = document.createElement("div");
    divElement.className = "error";
    divElement.textContent = msg;
    if (position === "top") {
        form.prepend(divElement);
    } else {
        form.appendChild(divElement);
    }

    setTimeout(function() { divElement.remove()}, duration)
}
form.addEventListener("submit", validateForm);