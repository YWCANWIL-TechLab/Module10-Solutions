// * SOLUTIONS


/**
 * Using the Form located on module10.html, collect the user's input from the 
 * first name and last name fields. Once you have collected the user's full name,
 * greet the user by their name with an alert.
 */
function greetUser() {
    const first = document.forms['personForm']['firstName'].value;
    const last = document.forms['personForm']['lastName'].value;
    if(firstName.length === 0 || lastName.length === 0) {
        alert('Please fill out the form');
    }
    else {
        alert(`Welcome ${first} ${last}`);
    }
}


/**
 * Let's get some practice with HTML Forms. Add a dropdown menu where users can
 * select their favorite programming language. When you add the dropdown menu,
 * you should do it directly inside of module10.html, not programmatically 
 * using JavaScript. All this function should do is alert the user and say that
 * their favorite language is a great choice.
 */
function favoriteProgrammingLanguage() {
    // TODO
    const select = document.getElementById('languages');
    const favLang = select.value;
    let formatted = favLang[0].toUpperCase() + favLang.slice(1);
    alert(`${formatted} is a great choice!`);
}


/**
 * Create another input field and another label inside of module10.html. It should
 * take a number. The field should require that a number be entered before the 
 * user submits the form. You should also ensure that the user selects a value 
 * between 1 and 100. Then, this function should display the value that they 
 * entered on the div with an id of header.
 */
function askForRandomNumber() {
    const number = document.forms['personForm']['randomNumber'].value;
    document.getElementById('header').textContent = number;
    console.log(`All done! Number: ${number}`);
}


/**
 * Use the Forms API with the forms that ask the user for their first and last
 * name. You should check that there is a valid input for both the first and 
 * last name. If there isn't, display the validation message on the div with
 * an id of 'header'. If the input is valid, display their first and last name
 * on the header instead.
 */
function useFormsAPI1() {
    // TODO
    const first = document.forms['personForm']['firstNameInput'];
    console.log(first.value);
    const last = document.forms['personForm']['lastNameInput'];
    if(first.validity.valid && last.validity.valid) {
        document.getElementById('header').textContent = `FirstName: ${first.value}, LastName: ${last.value}`;
    }
    else {
        document.getElementById('header').validationMessage;
    }
}



useFormsAPI1();


