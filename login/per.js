const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("passWord");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!isValidEmail(emailInput.value)) {
    emailError.innerHTML = "Please enter a valid email address.";
    return;
  }

  // Check login credentials
  const defaultUsername = "ukatadan502@gmail.com";
  const defaultPassword = "@378959D";
  const username = emailInput.value;
  const password = passwordInput.value;

  if (username === defaultUsername && password === defaultPassword) {
    alert("LOGIN SUCCESSFUL");
    // You can redirect or perform further actions here after successful login.
  } else {
    alert("EMAIL OR PASSWORD INCORRECT");
  }
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
