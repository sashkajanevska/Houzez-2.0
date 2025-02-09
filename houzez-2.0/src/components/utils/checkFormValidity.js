import checkEmailValidity from "./checkEmailValidity";

const checkOptionValidity = (element, styles) => {
  const label = document.querySelector(`label[for="${element.current.id}"]`);

  if (!element.current.value) {
    element.current.parentNode.classList.add(styles.invalid);
    label.classList.add(styles.active);
  } else {
    element.current.parentNode.classList.remove(styles.invalid);
    label.classList.remove(styles.active);
  }
};

const checkNumInputValidity = (element, styles) => {
  const label = document.querySelector(`label[for="${element.current.id}"]`);

  if (!element.current.value || element.current.value < element.current.min) {
    element.current.parentNode.classList.add(styles.invalid);
    label.classList.add(styles.active);
  } else {
    element.current.parentNode.classList.remove(styles.invalid);
    label.classList.remove(styles.active);
  }
};

const checkTextInputValidity = (element, styles) => {
  const label = document.querySelector(`label[for="${element.current.id}"]`);

  if (!element.current.value || element.current.value.match(/[0-9]/g)) {
    element.current.parentNode.classList.add(styles.invalid);
    label.classList.add(styles.active);
  } else {
    element.current.parentNode.classList.remove(styles.invalid);
    label.classList.remove(styles.active);
  }
};

export default function checkFormValidity({
  nameInputRef,
  emailInputRef,
  lastNameInputRef,
  messageInputRef,
  selectElements,
  numInputElements,
  styles,
}) {
  checkTextInputValidity(nameInputRef, styles);
  nameInputRef.current.addEventListener("keyup", () => {
    checkTextInputValidity(nameInputRef, styles);
  });

  checkEmailValidity(emailInputRef, styles);
  emailInputRef.current.addEventListener("keyup", () => {
    checkEmailValidity(emailInputRef, styles);
  });

  if (selectElements) {
    selectElements.forEach((element) => {
      checkOptionValidity(element, styles);
      element.current.addEventListener("change", () => {
        checkOptionValidity(element, styles);
      });
    });

    numInputElements.forEach((element) => {
      checkNumInputValidity(element, styles);
      element.current.addEventListener("keyup", () => {
        checkNumInputValidity(element, styles);
      });
    });
  } else {
    checkTextInputValidity(lastNameInputRef, styles);
    lastNameInputRef.current.addEventListener("keyup", () => {
      checkTextInputValidity(lastNameInputRef, styles);
    });

    checkTextInputValidity(messageInputRef, styles);
    messageInputRef.current.addEventListener("keyup", () => {
      checkTextInputValidity(messageInputRef, styles);
    });
  }
}
