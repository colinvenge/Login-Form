// Function to toggle password visibility
function myFunction() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Function to handle form submission
document.querySelector(".myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to avoid page reload

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Display a message to confirm submission
    alert("Form submitted!\nEmail: " + email + "\nPassword: " + password);
});