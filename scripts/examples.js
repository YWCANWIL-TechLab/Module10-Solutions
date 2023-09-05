// * EXAMPLES


function validateForm() {
    const firstNameField = document.forms['personForm']['firstName'].value;
    if(firstNameField === "") {
        alert('You must fill out all fields');
        return false;
    }
    else {
        document.getElementById('header').textContent = `You entered correct input`;
        return true;
    }
}

function oneToTen() {
    const dom = document;
    const inputField = dom.getElementById('favNum').value;

    let responseText;
    if(isNaN(inputField) || inputField < 1 || inputField > 10) {
        responseText = 'Invalid input';
        alert(responseText);
    }
    else {
        responseText = `${inputField} is your favorite number!`;
    }
    dom.getElementById('header').textContent = responseText;
}


document.forms['personForm'].onsubmit = (event) => {
    event.preventDefault();
    if(validateForm() && oneToTen()) {
        // Submit manually
        document.forms['personForm'].submit();
    }
}

