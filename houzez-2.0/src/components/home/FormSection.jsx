import { useRef } from "react";
import checkFormValidity from "../utils/checkFormValidity";

export default function FormSection() {
  const inquiryTypeRef = useRef();
  const userTypeRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const propertyTypeRef = useRef();
  const priceInputRef = useRef();
  const areaInputRef = useRef();
  const bedsNumInputRef = useRef();
  const bathsNumInputRef = useRef();
  const errorBoxRef = useRef();
  const successBoxRef = useRef();

  const selectElements = [inquiryTypeRef, userTypeRef, propertyTypeRef];
  const inputNumElements = [
    priceInputRef,
    areaInputRef,
    bedsNumInputRef,
    bathsNumInputRef,
  ];

  const toggleLoadingSpinner = () => {
    document
      .querySelector(".submit-btn-box button span")
      .classList.toggle("inactive");
  };

  const submitForm = () => {
    toggleLoadingSpinner();

    setTimeout(() => {
      toggleLoadingSpinner();
      selectElements.forEach((element) => {
        element.current.value = "";
      });

      inputNumElements.forEach((element) => {
        element.current.value = "";
      });

      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      document.getElementById("lastName").value = "";

      successBoxRef.current.classList.add("active");
    }, 1500);
  };

  const closeSuccessMsg = () => {
    successBoxRef.current.classList.remove("active");
  };

  return (
    <section className="form-section">
      <div className="form-top-shape">
        <img src="../../../images/home/section-shape.svg" alt="shape" />
      </div>
      <div className="form-overlay"></div>
      <div className="form-content">
        <div className="form-content-container">
          <div className="form-content-inner">
            <div className="form-descr">
              <h2>
                Create Custom Capture Forms And Manage Leads With The Integrated
                Houzez CRM
              </h2>
              <p>
                The Inquiry Form widget allows you to design unique forms to
                capture your leads. It connects with Houzez CRM and your email
                inbox to keep your work everything on track.
              </p>
              <div></div>
            </div>

            <div className="form-container">
              <form
                noValidate={true}
                onSubmit={(e) => {
                  e.preventDefault();
                  checkFormValidity(
                    selectElements,
                    inputNumElements,
                    nameInputRef,
                    emailInputRef
                  );

                  const errorBox = errorBoxRef.current;
                  if (!errorBox.querySelector("label.active")) {
                    submitForm();
                  }
                }}
              >
                <div className="form-fields-wrapper">
                  <div className="inquiry-type-box">
                    <label>Inquiry Type</label>
                    <select
                      name="inquiry-type"
                      id="inquiryType"
                      title="* Inquiry Type"
                      ref={inquiryTypeRef}
                    >
                      <option value="">Select</option>
                      <option value="Purchase">Purchase</option>
                      <option value="Rent">Rent</option>
                      <option value="Sell">Sell</option>
                      <option value="Miss">Miss</option>
                      <option value="Evaluation">Evaluation</option>
                      <option value="Mortgage">Mortgage</option>
                    </select>
                  </div>

                  <div className="user-type-box">
                    <label>Your Information</label>
                    <select
                      name="user-type"
                      id="userType"
                      title="* Your Information"
                      ref={userTypeRef}
                    >
                      <option value="">I'm a</option>
                      <option value="I'm a real estate agent">
                        I'm a real estate agent
                      </option>
                      <option value="I'm a property owner">
                        I'm a property owner
                      </option>
                    </select>
                  </div>

                  <div className="first-name-box">
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      title="* First Name"
                      ref={nameInputRef}
                    />
                  </div>

                  <div className="last-name-box">
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      title="* Last Name"
                    />
                  </div>

                  <div className="email-box">
                    <input
                      type="email"
                      id="emailAddress"
                      placeholder="Email Address"
                      title="* Email Address"
                      ref={emailInputRef}
                    />
                  </div>

                  <div className="property-type-box">
                    <label>Property Details</label>
                    <select
                      name="property-type"
                      id="propertyType"
                      title="* Property Details"
                      ref={propertyTypeRef}
                    >
                      <option value="">Select type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Condo">Condo</option>
                      <option value="Lot">Lot</option>
                      <option value="Multy Family Home">
                        Multy Family Home
                      </option>
                      <option value="Office">Office</option>
                      <option value="Shop">Shop</option>
                      <option value="Single Family Home">
                        Single Family Home
                      </option>
                      <option value="Studio">Studio</option>
                      <option value="Villa">Villa</option>
                    </select>
                  </div>

                  <div className="price-box">
                    <input
                      type="number"
                      id="maxPrice"
                      placeholder="Max price ($)"
                      title="* Max price ($)"
                      min={1}
                      ref={priceInputRef}
                    />
                  </div>

                  <div className="area-size-box">
                    <input
                      type="number"
                      id="areaSize"
                      placeholder="Minimum size (Sq Ft)"
                      title="* Minimum size (Sq Ft)"
                      min={1}
                      ref={areaInputRef}
                    />
                  </div>

                  <div className="beds-num-box">
                    <input
                      type="number"
                      id="bedsNum"
                      placeholder="Number of beds"
                      title="* Number of beds"
                      min={0}
                      ref={bedsNumInputRef}
                    />
                  </div>

                  <div className="baths-num-box">
                    <input
                      type="number"
                      id="bathsNum"
                      placeholder="Number of baths"
                      title="* Number of baths"
                      min={0}
                      ref={bathsNumInputRef}
                    />
                  </div>

                  <div className="submit-btn-box">
                    <button type="submit">
                      Submit
                      <span className="loading loading-spinner loading-sm inactive"></span>
                    </button>
                  </div>
                </div>

                <div className="success-msg" ref={successBoxRef}>
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
                <div className="error-msg" ref={errorBoxRef}>
                  <label htmlFor="inquiryType">* Inquiry Type</label>
                  <label htmlFor="userType">* Your Information</label>
                  <label htmlFor="firstName">* First Name</label>
                  <label htmlFor="emailAddress">* Email Address</label>
                  <label htmlFor="propertyType">* Property Details</label>
                  <label htmlFor="maxPrice">* Max price ($)</label>
                  <label htmlFor="areaSize">* Minimum size (Sq Ft)</label>
                  <label htmlFor="bedsNum">* Number of beds</label>
                  <label htmlFor="bathsNum">* Number of baths</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="form-bottom-shape">
        <img src="../../../images/home/section-shape.svg" alt="shape" />
      </div>
    </section>
  );
}
