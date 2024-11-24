import { useRef, useState } from "react";
import checkEmailValidity from "../utils/checkEmailValidity";
import checkPasswordValidity from "../utils/checkPasswordValidity";
import styles from "../../styles/header/LoginModal.module.css";

export default function LoginModal({
  isLoginModalActive,
  setIsLoginModalActive,
  isResetModalActive,
  setIsResetModalActive,
}) {
  const [isInactive, setIsInactive] = useState(true);
  const [inputType, setInputType] = useState("text");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const checkboxInputRef = useRef();

  const closeLoginOverlay = () => {
    setIsLoginModalActive(!isLoginModalActive);

    setTimeout(() => {
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      checkboxInputRef.current.checked = false;
      setIsInactive(true);
    }, 300);
  };

  const loading = () => {
    setIsInactive(!isInactive);
    setTimeout(() => {
      closeLoginOverlay();
    }, 1500);
  };

  const openResetOverlay = () => {
    closeLoginOverlay();
    setIsResetModalActive(!isResetModalActive);
  };

  return (
    <div
      className={`${styles["modal-overlay"]} ${
        isLoginModalActive ? styles["active"] : ""
      }`}
      onClick={closeLoginOverlay}
    >
      <div
        className={`${styles["login-modal"]} ${
          isLoginModalActive ? styles["active"] : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["login-modal-inner"]}>
          <div className={styles["login-header"]}>
            <p>Login</p>
            <button
              className={styles["close-button"]}
              onClick={closeLoginOverlay}
            >
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

          <div className={styles["login-main"]}>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (inputType === "email") {
                  checkEmailValidity(emailInputRef, styles);
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
              <div className={styles["email"]}>
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
              <div className={styles["password"]}>
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

              <div className={styles["login-tools"]}>
                <div className={styles["save-button"]}>
                  <input id="saveUser" type="checkbox" ref={checkboxInputRef} />
                  <label htmlFor="saveUser">Remember me</label>
                </div>
                <button type="button" onClick={openResetOverlay}>
                  Lost your password?
                </button>
              </div>

              <button type="submit" className={styles["login-button"]}>
                Login
                <span
                  className={`loading loading-spinner loading-sm ${
                    isInactive ? styles["inactive"] : ""
                  }`}
                ></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
