import { useRef, useState } from "react";
import checkEmailValidity from "../utils/checkEmailValidity";
import checkPasswordValidity from "../utils/checkPasswordValidity";

export default function LoginModal() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const checkboxInputRef = useRef();
  const [inputType, setInputType] = useState("text");

  const closeLoginOverlay = () => {
    document.getElementById("login").classList.remove("active");
    document.getElementById("loginOverlay").classList.remove("active");
    setTimeout(() => {
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      checkboxInputRef.current.checked = false;
      document.querySelector(".login-button span").classList.add("inactive");
    }, 300);
  };

  const openResetOverlay = () => {
    closeLoginOverlay();
    document.getElementById("resetOverlay").classList.add("active");
    setTimeout(() => {
      document.getElementById("reset").classList.add("active");
    }, 50);
  };

  const loading = () => {
    document.querySelector(".login-button span").classList.remove("inactive");
    setTimeout(() => {
      closeLoginOverlay();
    }, 1500);
  };

  return (
    <div
      id="loginOverlay"
      className="modal-overlay"
      onClick={closeLoginOverlay}
    >
      <div
        id="login"
        className="login-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="login-modal-inner">
          <div className="login-header">
            <p>Login</p>
            <button className="close-button" onClick={closeLoginOverlay}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="14px"
                height="14px"
                viewBox="0 0 16 16"
                version="1.1"
              >
                <path
                  fill="#fff"
                  d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"
                />
              </svg>
            </button>
          </div>

          <div className="login-main">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (inputType === "email") {
                  checkEmailValidity(emailInputRef);
                }
                checkPasswordValidity(passwordInputRef);

                if (
                  emailInputRef.current.checkValidity() &&
                  passwordInputRef.current.checkValidity()
                ) {
                  loading();
                }
              }}
            >
              <div className="email">
                <input
                  type={inputType}
                  placeholder="Username or Email"
                  ref={emailInputRef}
                  required
                  onChange={() => {
                    emailInputRef.current.setCustomValidity("");
                    emailInputRef.current.value.includes("@")
                      ? setInputType("email")
                      : setInputType("text");
                  }}
                />
              </div>
              <div className="password">
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordInputRef}
                  required
                  onChange={() => {
                    passwordInputRef.current.setCustomValidity("");
                  }}
                />
              </div>

              <div className="login-tools">
                <div className="save-button">
                  <input id="saveUser" type="checkbox" ref={checkboxInputRef} />
                  <label htmlFor="saveUser">Remember me</label>
                </div>
                <button type="button" onClick={openResetOverlay}>
                  Lost your password?
                </button>
              </div>

              <button type="submit" className="login-button">
                Login
                <span className="loading loading-spinner loading-sm inactive"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
