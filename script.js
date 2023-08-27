/*Your users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page*/

/*
ERROR MESSAGE:
1. Create a variable with the correct email address format required;
2. Create a variable for the input and one for the output;
3. Check the requirement using if statement;
4. Log an error message to the console (p) if the format is not correct;
5. Alert window if email address format is correct;
*/

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// NOTE: if you are using any \ in a string, you need to open and close it using a slash

let emailAddress = document.querySelector("#email");
let errorMessage = document.querySelector(".incorrect"); 

function validateEmail(event) {
  event.preventDefault(); // Used to prevent the page from refreshing, which happens with forms sometimes
    if (emailFormat.test(emailAddress.value)) { //.value to get the value from the input
        alert("Thank you for subscribing!");
    }
    else {
      console.log(errorMessage.textContent = "Please, provide a valid email address.");
    }
}
// .test method works with regular expressions (e.g. the emailFormat rule), but doesn't work with strings

document.querySelector(".subscribe").addEventListener("click", validateEmail); 
// it is not ("click", validateEmail) because:
// the addEventListener method expects a reference to a function, not a function call!

// validateEmail(); //- Already using the button to validate the email address, so no need to call the function again

/* Use .textContent when you want to manipulate plain text content and avoid any HTML interpretation 
or rendering.
Use .value with form elements to interact with user input and retrieve or set the values of input fields,
 textareas, or select options. */