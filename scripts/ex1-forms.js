// * FORM EXERCISES


/**
 * Using the Form located on module10.html, collect the user's input from the 
 * first name and last name fields. Once you have collected the user's full name,
 * greet the user by their name with an alert.
 */
function greetUser() {
    // TODO
    const firstName = document.forms['personForm']['firstName'].value;
    const lastName = document.forms['personForm']['lastName'].value;
    alert(`Hello ${firstName} ${lastName}`);
}
// greetUser();

/**
 * Let's get some practice with HTML Forms. Add a dropdown menu where users can
 * select their favorite programming language. When you add the dropdown menu,
 * you should do it directly inside of module10.html, not programmatically 
 * using JavaScript. All this function should do is alert the user and say that
 * their favorite language is a great choice.
 */
function favoriteProgrammingLanguage() {
    const fav = document.forms['personForm']['languages'].value;

    alert(`${fav} is a great language!`);
}


/**
 * Create another input field and another label inside of module10.html. It should
 * take a number. The field should require that a number be entered before the 
 * user submits the form. You should also ensure that the user selects a value 
 * between 1 and 100. Then, this function should display the value that they 
 * entered on the div with an id of header.
 */
function askForRandomNumber() {
    // TODO
    
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
}




