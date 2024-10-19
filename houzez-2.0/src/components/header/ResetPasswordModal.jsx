import { useRef, useState } from "react";
import checkEmailValidity from "../utils/checkEmailValidity";

export default function NewPasswordModal() {
  const emailInputRef = useRef();
  const [inputType, setInputType] = useState("text");

  const closeResetOverlay = () => {
    document.getElementById("reset").classList.remove("active");
    document.getElementById("resetOverlay").classList.remove("active");
    setTimeout(() => {
      emailInputRef.current.value = "";
      document.getElementById("loadingSpinner").classList.add("inactive");
    });
  };

  const loading = () => {
    document.getElementById("loadingSpinner").classList.remove("inactive");
    setTimeout(() => {
      closeResetOverlay();
    }, 1500);
  };

  return (
    <div
      id="resetOverlay"
      className="modal-overlay"
      onClick={closeResetOverlay}
    >
      <div
        id="reset"
        className="reset-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="reset-modal-inner">
          <div className="reset-header">
            <h2>Reset Password</h2>
            <button onClick={closeResetOverlay}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="14px"
                height="14px"
                viewBox="0 0 16 16"
                version="1.1"
              >
                <path
                  fill="#21212180"
                  d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"
                />
              </svg>
            </button>
          </div>

          <div className="reset-main">
            <p>
              Please enter your username or email address. You will receive a
              link to create a new password via email.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (inputType === "email") {
                  checkEmailValidity(emailInputRef);
                }

                if (emailInputRef.current.checkValidity()) {
                  loading();
                }
              }}
            >
              <input
                type={inputType}
                placeholder="Enter your username or email"
                ref={emailInputRef}
                required
                onChange={() => {
                  emailInputRef.current.setCustomValidity("");
                  emailInputRef.current.value.includes("@")
                    ? setInputType("email")
                    : setInputType("text");
                }}
              />
              <button type="submit">
                Get new password
                <span
                  id="loadingSpinner"
                  className="loading loading-spinner loading-sm inactive"
                ></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
