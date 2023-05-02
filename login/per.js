const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!isValidEmail(emailInput.value)) {
    emailError.innerHTML = "Please enter a valid email address.";
    return;
  }

  form.submit();
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
