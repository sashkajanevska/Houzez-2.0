import { useRef } from "react";
import checkFormValidity from "../utils/checkFormValidity";

export default function ContactInfoSection() {
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const errorBoxRef = useRef();
  const successBoxRef = useRef();

  const toggleLoadingSpinner = () => {
    document.getElementById("loading-spinner").classList.toggle("inactive");
  };

  const submitForm = () => {
    toggleLoadingSpinner();

    setTimeout(() => {
      toggleLoadingSpinner();

      nameInputRef.current.value = "";
      lastNameInputRef.current.value = "";
      emailInputRef.current.value = "";
      messageInputRef.current.value = "";

      successBoxRef.current.classList.add("active");
    }, 1500);
  };

  const closeSuccessMsg = () => {
    successBoxRef.current.classList.remove("active");
  };

  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        <div className="contact-info-inner">
          <div className="contact-form-wrapper">
            <div className="contact-form-inner">
              <div className="contact-form-intro">
                <p>
                  Design your custom contact forms with this Houzez Elementor
                  custom widget and connect your leads with the integrated
                  Houzez CRM.
                </p>
              </div>

              <div className="contact-form-box">
                <form
                  noValidate={true}
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkFormValidity(
                      nameInputRef,
                      emailInputRef,
                      null,
                      null,
                      lastNameInputRef,
                      messageInputRef
                    );

                    const errorBox = errorBoxRef.current;
                    if (!errorBox.querySelector("label.active")) {
                      submitForm();
                    }
                  }}
                >
                  <div className="contact-form-content">
                    <div className="first-name-wrap">
                      <label>First Name</label>
                      <input
                        type="text"
                        id="first-name"
                        placeholder="Enter your name"
                        title="* First Name"
                        ref={nameInputRef}
                      />
                    </div>
                    <div className="last-name-wrap">
                      <label>Last Name</label>
                      <input
                        type="text"
                        id="last-name"
                        placeholder="Enter your last name"
                        title="* Last Name"
                        ref={lastNameInputRef}
                      />
                    </div>
                    <div className="email-wrap">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email-address"
                        placeholder="Email"
                        title="* Email Address"
                        ref={emailInputRef}
                      />
                    </div>
                    <div className="message-wrap">
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
                    <div className="submit-button-wrap">
                      <button type="submit">
                        Submit
                        <span
                          id="loading-spinner"
                          className="loading loading-spinner loading-sm inactive"
                        ></span>
                      </button>
                    </div>
                  </div>

                  <div className="success-message" ref={successBoxRef}>
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
                  <div className="error-message" ref={errorBoxRef}>
                    <label htmlFor="first-name">* First Name</label>
                    <label htmlFor="last-name">* Last Name</label>
                    <label htmlFor="email-address">* Email Address</label>
                    <label htmlFor="message">* Message</label>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="contact-info-wrapper">
            <div className="inquiries-contact-box">
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

            <div className="location-contact-box">
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

            <div className="social-contact-box">
              <div
                className="social-link"
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
                className="social-link"
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
                className="social-link"
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
                className="social-link"
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
                className="social-link"
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
                className="social-link"
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
