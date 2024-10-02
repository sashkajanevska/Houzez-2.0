export default function checkEmailValidity(emailInputRef, submitForm) {
  const emailInput = emailInputRef.current.value;
  const emailField = emailInputRef.current;
  const atIndex = emailInput.indexOf("@");
  const emailDomain = emailInput.slice(atIndex + 1);

  if (!emailDomain || !emailDomain.includes(".")) {
    emailField.setCustomValidity(
      "The email address must contain a domain (e.g. email@domain.com)"
    );
  }

  if (!emailField.checkValidity()) {
    emailField.reportValidity();
    return;
  }

  if (submitForm) {
    submitForm();
  }
}
