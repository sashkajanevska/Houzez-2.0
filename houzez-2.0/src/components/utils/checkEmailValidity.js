export default function checkEmailValidity(emailInputRef, submitForm) {
  const emailInput = emailInputRef.current.value;
  const emailField = emailInputRef.current;
  const atIndex = emailInput.indexOf("@");
  const emailDomain = emailInput.slice(atIndex + 1);

  if (emailField.required) {
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
  } else {
    const label = document.querySelector(`label[for="${emailField.id}"]`);

    if (
      !emailInput ||
      !emailInput.includes("@") ||
      !emailDomain ||
      !emailDomain.includes(".") ||
      emailDomain.endsWith(".")
    ) {
      emailField.parentNode.classList.add("invalid");
      label.classList.add("active");
      return;
    }

    emailField.parentNode.classList.remove("invalid");
    label.classList.remove("active");
  }
}
