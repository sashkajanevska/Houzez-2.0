import { useRef, useState } from "react";
import checkFormValidity from "../utils/checkFormValidity";
import styles from "../../styles/contact/ContactInfoSection.module.css";

export default function ContactInfoSection() {
  const [isActive, setIsActive] = useState(false);
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const errorBoxRef = useRef();
  const successBoxRef = useRef();

  const toggleActiveState = () => {
    setIsActive((prevState) => !prevState);
  };

  const submitForm = () => {
    toggleActiveState();

    setTimeout(() => {
      toggleActiveState();

      nameInputRef.current.value = "";
      lastNameInputRef.current.value = "";
      emailInputRef.current.value = "";
      messageInputRef.current.value = "";

      successBoxRef.current.classList.add(styles["active"]);
    }, 1500);
  };

  const closeSuccessMsg = () => {
    successBoxRef.current.classList.remove(styles["active"]);
  };

  return (
    <section className={styles["contact-info-section"]}>
      <div className={styles["contact-info-container"]}>
        <div className={styles["contact-info-inner"]}>
          <div className={styles["contact-form-wrapper"]}>
            <div className={styles["contact-form-inner"]}>
              <div className={styles["contact-form-intro"]}>
                <p>
                  Design your custom contact forms with this Houzez Elementor
                  custom widget and connect your leads with the integrated
                  Houzez CRM.
                </p>
              </div>

              <div className={styles["contact-form-box"]}>
                <form
                  noValidate={true}
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkFormValidity({
                      nameInputRef,
                      emailInputRef,
                      lastNameInputRef,
                      messageInputRef,
                      styles,
                    });

                    const errorBox = errorBoxRef.current;
                    if (!errorBox.querySelector(`.${styles.active}`)) {
                      submitForm();
                    }
                  }}
                >
                  <div className={styles["contact-form-content"]}>
                    <div className={styles["first-name-wrap"]}>
                      <label>First Name</label>
                      <input
                        type="text"
                        id="first-name"
                        placeholder="Enter your name"
                        title="* First Name"
                        ref={nameInputRef}
                      />
                    </div>
                    <div className={styles["last-name-wrap"]}>
                      <label>Last Name</label>
                      <input
                        type="text"
                        id="last-name"
                        placeholder="Enter your last name"
                        title="* Last Name"
                        ref={lastNameInputRef}
                      />
                    </div>
                    <div className={styles["email-wrap"]}>
                      <label>Email</label>
                      <input
                        type="email"
                        id="email-address"
                        placeholder="Email"
                        title="* Email Address"
                        ref={emailInputRef}
                      />
                    </div>
                    <div className={styles["message-wrap"]}>
                      <label>Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Message"
                        title="* Message"
                        ref={messageInputRef}
                      ></textarea>
                    </div>
                    <div className={styles["submit-button-wrap"]}>
                      <button type="submit">
                        Submit
                        <span
                          className={`loading loading-spinner loading-sm ${
                            !isActive ? styles["inactive"] : ""
                          }`}
                        ></span>
                      </button>
                    </div>
                  </div>

                  <div
                    className={styles["success-message"]}
                    ref={successBoxRef}
                  >
                    <div>
                      <p>Message sent successfully!</p>
                      <button type="button" onClick={closeSuccessMsg}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="14px"
                          height="14px"
                          viewBox="0 0 16 16"
                          version="1.1"
                        >
                          <path
                            fill="#155724"
                            d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={styles["error-message"]} ref={errorBoxRef}>
                    <label htmlFor="first-name">* First Name</label>
                    <label htmlFor="last-name">* Last Name</label>
                    <label htmlFor="email-address">* Email Address</label>
                    <label htmlFor="message">* Message</label>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className={styles["contact-info-wrapper"]}>
            <div className={styles["inquiries-contact-box"]}>
              <div>
                <h3>For inquiries, contact:</h3>
                <p>
                  <span>Amy Miller</span>
                  <br />
                  Public Relations Manager
                  <br />
                  774 NE 84th St Miami, FL 33879
                  <br />
                  amy.miller@houzez.com
                </p>
                <p>
                  <span>Kyle Parker</span>
                  <br />
                  Public Relations Associated
                  <br />
                  774 NE 84th St Miami, FL 33879
                  <br />
                  kyle.parker@houzez.com
                </p>
              </div>
            </div>

            <div className={styles["location-contact-box"]}>
              <div>
                <p>
                  <span>Corporate Headquarters</span>
                  <br />
                  1584 Biscayne Boulevard
                  <br />
                  Miami FL, 33176
                </p>
              </div>
            </div>

            <div className={styles["social-contact-box"]}>
              <div
                className={styles["social-link"]}
                style={{ backgroundColor: "#4867aa" }}
              >
                <a href="#">
                  <img
                    src="../../../images/contact/facebook.svg"
                    alt="facebook"
                  />
                </a>
              </div>
              <div
                className={styles["social-link"]}
                style={{ backgroundColor: "#179cf0" }}
              >
                <a href="#">
                  <img
                    src="../../../images/contact/twitter.svg"
                    alt="twitter"
                  />
                </a>
              </div>
              <div
                className={styles["social-link"]}
                style={{ backgroundColor: "#ff0000" }}
              >
                <a href="#">
                  <img
                    src="../../../images/contact/youtube.svg"
                    alt="youtube"
                  />
                </a>
              </div>
              <div
                className={styles["social-link"]}
                style={{ backgroundColor: "#0a66c2" }}
              >
                <a href="#">
                  <img
                    src="../../../images/contact/linkedin.svg"
                    alt="linkedIn"
                  />
                </a>
              </div>
              <div
                className={styles["social-link"]}
                style={{ backgroundColor: "#262626" }}
              >
                <a href="#">
                  <img
                    src="../../../images/contact/instagram.svg"
                    alt="instagram"
                  />
                </a>
              </div>
              <div
                className={styles["social-link"]}
                style={{ backgroundColor: "#00b1f0" }}
              >
                <a href="#">
                  <img src="../../../images/contact/skype.svg" alt="skype" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
