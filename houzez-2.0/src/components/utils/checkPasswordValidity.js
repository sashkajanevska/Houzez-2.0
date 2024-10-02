export default function checkPasswordValidity(passwordInputRef) {
  const passwordInput = passwordInputRef.current.value;
  const passwordField = passwordInputRef.current;

  if (passwordInput.length < 8) {
    passwordField.setCustomValidity(
      "Password must be at least 8 characters or longer"
    );
  }

  if (!passwordInput.match(/[A-Z]/g)) {
    passwordField.setCustomValidity(
      "Password must contain an uppercase letter (A-Z)"
    );
  }

  if (!passwordInput.match(/[a-z]/g)) {
    passwordField.setCustomValidity(
      "Password must contain a lowercase letter (a-z)"
    );
  }

  if (!passwordInput.match(/[0-9]/g)) {
    passwordField.setCustomValidity(
      "Password must contain at least one digit (0-9)"
    );
  }

  if (!passwordInput.match(/[^a-zA-Z0-9]/g)) {
    passwordField.setCustomValidity(
      "Password must contain at least one special character (e.g. !@#$%^&*()_-=+/) or Space( )"
    );
  }

  if (!passwordField.checkValidity()) {
    passwordField.reportValidity();
    return;
  }
}
