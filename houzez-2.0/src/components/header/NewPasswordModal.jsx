import { useRef } from "react";

export default function NewPasswordModal() {
  const passwordInputRef = useRef();

  const closeResetOverlay = () => {
    document.getElementById("reset").classList.remove("active");
    document.getElementById("resetOverlay").classList.remove("active");
    setTimeout(() => {
      passwordInputRef.current.value = "";
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
                xmlns:xlink="http://www.w3.org/1999/xlink"
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
            <form>
              <input
                id="newPassword"
                type="text"
                placeholder="Enter your username or email"
                ref={passwordInputRef}
              />
            </form>
            <button onClick={loading}>
              Get new password
              <span
                id="loadingSpinner"
                className="loading loading-spinner loading-sm inactive"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
