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

const checkTextInputValidity = (nameInputRef) => {
  const label = document.querySelector(
    `label[for="${nameInputRef.current.id}"]`
  );
  
  if (
    !nameInputRef.current.value ||
    nameInputRef.current.value.match(/[0-9]/g)
  ) {
    nameInputRef.current.parentNode.classList.add("invalid");
    label.classList.add("active");
  } else {
    nameInputRef.current.parentNode.classList.remove("invalid");
    label.classList.remove("active");
  }
};

export default function formValidation(
  selectElements,
  numInputElements,
  nameInputRef,
  emailInputRef
) {
  selectElements.forEach((element) => {
    checkOptionValidity(element);
    element.current.addEventListener("change", () => {
      checkOptionValidity(element);
    });
  });

  checkTextInputValidity(nameInputRef);
  nameInputRef.current.addEventListener("keyup", () => {
    checkTextInputValidity(nameInputRef);
  });

  checkEmailValidity(emailInputRef);
  emailInputRef.current.addEventListener("keyup", () => {
    checkEmailValidity(emailInputRef);
  });

  numInputElements.forEach((element) => {
    checkNumInputValidity(element);
    element.current.addEventListener("keyup", () => {
      checkNumInputValidity(element);
    });
  });
}
