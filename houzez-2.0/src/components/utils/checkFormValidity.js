import checkEmailValidity from "./checkEmailValidity";

const checkOptionValidity = (element) => {
  const label = document.querySelector(`label[for="${element.current.id}"]`);

  if (!element.current.value) {
    element.current.parentNode.classList.add("invalid");
    label.classList.add("active");
  } else {
    element.current.parentNode.classList.remove("invalid");
    label.classList.remove("active");
  }
};

const checkNumInputValidity = (element) => {
  const label = document.querySelector(`label[for="${element.current.id}"]`);

  if (!element.current.value || element.current.value < element.current.min) {
    element.current.parentNode.classList.add("invalid");
    label.classList.add("active");
  } else {
    element.current.parentNode.classList.remove("invalid");
    label.classList.remove("active");
  }
};

const checkTextInputValidity = (element) => {
  const label = document.querySelector(`label[for="${element.current.id}"]`);

  if (!element.current.value || element.current.value.match(/[0-9]/g)) {
    element.current.parentNode.classList.add("invalid");
    label.classList.add("active");
  } else {
    element.current.parentNode.classList.remove("invalid");
    label.classList.remove("active");
  }
};

export default function formValidation(
  nameInputRef,
  emailInputRef,
  selectElements,
  numInputElements,
  lastNameInputRef,
  messageInputRef
) {
  checkTextInputValidity(nameInputRef);
  nameInputRef.current.addEventListener("keyup", () => {
    checkTextInputValidity(nameInputRef);
  });

  checkEmailValidity(emailInputRef);
  emailInputRef.current.addEventListener("keyup", () => {
    checkEmailValidity(emailInputRef);
  });

  if (selectElements) {
    selectElements.forEach((element) => {
      checkOptionValidity(element);
      element.current.addEventListener("change", () => {
        checkOptionValidity(element);
      });
    });

    numInputElements.forEach((element) => {
      checkNumInputValidity(element);
      element.current.addEventListener("keyup", () => {
        checkNumInputValidity(element);
      });
    });
  } else {
    checkTextInputValidity(lastNameInputRef);
    lastNameInputRef.current.addEventListener("keyup", () => {
      checkTextInputValidity(lastNameInputRef);
    });

    checkTextInputValidity(messageInputRef);
    messageInputRef.current.addEventListener("keyup", () => {
      checkTextInputValidity(messageInputRef);
    });
  }
}
