
    document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form and its fields
    const form = document.querySelector("form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");

    // Function to validate the form fields
    function validateForm() {
    // Reset previous error messages
    nameField.classList.remove("is-invalid");
    emailField.classList.remove("is-invalid");
    passwordField.classList.remove("is-invalid");
    confirmPasswordField.classList.remove("is-invalid");

    let isValid = true;

    // Validate Name (non-empty)
    if (nameField.value.trim() === "") {
    nameField.classList.add("is-invalid");
    isValid = false;
}

    // Validate Email (simple check for email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
    emailField.classList.add("is-invalid");
    isValid = false;
}

    // Validate Password (at least 6 characters)
    if (passwordField.value.length < 6) {
    passwordField.classList.add("is-invalid");
    isValid = false;
}

    // Validate Confirm Password (matches password)
    if (confirmPasswordField.value !== passwordField.value) {
    confirmPasswordField.classList.add("is-invalid");
    isValid = false;
}

    return isValid;
}

    // Handle form submission
    form.addEventListener("submit", function (event) {
    if (!validateForm()) {
    // Prevent form submission if validation fails
    event.preventDefault();
}
});
});

