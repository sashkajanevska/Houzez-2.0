import { useRef } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../components/utils/scrollToTop";
import checkEmailValidity from "../utils/checkEmailValidity";
import "../../styles/Footer.css";

export default function Footer() {
  const emailInputRef = useRef();

  const submitForm = () => {
    emailInputRef.current.value = "";
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-top-inner">
            <div className="about">
              <h3>About Site</h3>
              <p>
                Houzez is a premium WordPress theme for real estate where modern
                aesthetics are combined with tasteful simplicity.
              </p>
              <div>
                <Link to={"/about-us"} onClick={scrollToTop}>
                  Read more
                </Link>
              </div>
            </div>
            <div className="contact">
              <h3>Contact Us</h3>
              <ul>
                <li className="contact-address">
                  774 NE 84th St Miami, FL 33879
                </li>
                <li className="contact-phone">+1 (800) 990 8877</li>
                <li className="contact-email">email@email.com</li>
              </ul>
              <div>
                <Link to={"/contact-us"} onClick={scrollToTop}>
                  Contact us
                </Link>
              </div>
            </div>
            <div className="newsletter">
              <h3>Newsletter</h3>
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkEmailValidity(emailInputRef, submitForm);
                  }}
                >
                  <input
                    ref={emailInputRef}
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={() => {
                      emailInputRef.current.setCustomValidity("");
                    }}
                  />
                  <button type="submit">Submit</button>
                </form>
                <p>
                  Houzez is a premium WordPress theme for real estate where
                  modern aesthetics are combined with tasteful simplicity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-inner">
            <div className="footer-copyright">
              © Houzez - All rights reserved
            </div>
            <div className="footer-nav">
              <a href="#">Privacy</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-social">
              <a href="#" className="fb-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="X-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  width="14px"
                  height="14px"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlSpace="preserve"
                >
                  <path
                    d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"
                    stroke="#fff"
                    strokeWidth="0.5"
                  />
                </svg>
              </a>
              <a href="#" className="G-plus-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  height="18px"
                  width="18px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <polygon
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    points="512,264.828 459.034,264.828 459.034,317.793 414.897,317.793 414.897,264.828    361.931,264.828 361.931,220.69 414.897,220.69 414.897,167.724 459.034,167.724 459.034,220.69 512,220.69  "
                  />
                  <g>
                    <path
                      fill="#fff"
                      d="M171.245,425.622c-46.319,0-90.952-18.145-122.456-49.783   C17.019,343.938-0.306,300.944,0.004,254.779c0.309-46.153,18.206-88.902,50.392-120.369   c31.683-30.974,73.605-48.032,118.042-48.032c24.154,0,44.759,3.946,62.996,12.064c6.633,2.953,19.064,8.949,25.158,12.531   c6.033,3.546,21.141,14.397,23.234,15.904c5.34,3.712,8.734,9.543,9.315,16.024c0.589,6.523-1.744,12.912-6.4,17.524   l-38.748,38.385c-7.446,7.377-19.132,8.437-27.786,2.515l-13.097-8.961c-9.968-6.155-21.676-9.408-33.873-9.408   c-18.243,0-36.179,7.417-49.207,20.349c-27.866,27.67-28.178,76.555-0.666,104.611c13.129,13.393,31.97,21.073,51.695,21.073   c19.145,0,36.899-7.326,48.709-20.1c1.193-1.29,2.334-2.598,3.416-3.916h-50.447c-12.078,0-21.905-9.826-21.905-21.904v-46.791   c0-12.078,9.826-21.904,21.905-21.904h135.264c10.806,0,19.869,7.71,21.613,18.355c0.4,2.167,1.602,8.84,1.823,11.842l0,0   c0.713,9.73,0.1,28.467-0.309,36.016c-1.948,35.979-16.242,69.119-41.34,95.837C260.42,407.691,217.212,425.622,171.245,425.622z    M168.438,106.777c-39.075,0-75.932,14.994-103.781,42.221c-28.266,27.633-43.982,65.249-44.254,105.92   c-0.273,40.681,14.941,78.513,42.84,106.531c27.704,27.821,67.069,43.778,108.001,43.778c40.359,0,78.148-15.587,103.676-42.764   c21.762-23.168,34.155-51.861,35.839-82.975c0.476-8.808,0.913-25.523,0.335-33.424c-0.099-1.344-0.886-6.103-1.558-9.741   c-0.017-0.092-0.033-0.185-0.047-0.277c-0.115-0.736-0.74-1.271-1.486-1.271H172.738c-0.83,0-1.506,0.675-1.506,1.505v46.791   c0,0.83,0.676,1.505,1.506,1.505h68.958c3.47,0,6.702,1.764,8.58,4.684c1.877,2.919,2.141,6.592,0.701,9.749   c-3.644,7.988-9.257,16.194-16.23,23.734c-15.658,16.935-38.871,26.647-63.685,26.647c-25.17,0-49.32-9.911-66.26-27.19   c-16.785-17.116-26.319-41.488-26.156-66.865c0.163-25.378,10.009-49.617,27.016-66.503c16.821-16.697,39.994-26.272,63.579-26.272   c16.084,0,31.587,4.357,44.833,12.6c0.125,0.079,0.249,0.159,0.37,0.242l13.285,9.091c0.595,0.406,1.398,0.335,1.911-0.172   l38.748-38.385c0.319-0.317,0.479-0.756,0.44-1.204c-0.041-0.452-0.276-0.855-0.65-1.11c-0.064-0.044-0.129-0.09-0.193-0.136   c-4.52-3.257-17.237-12.287-21.725-14.927c-5.376-3.159-17.083-8.794-23.119-11.481   C207.567,110.145,189.675,106.777,168.438,106.777z"
                    />
                  </g>
                </svg>
              </a>
              <a href="#" className="linkedIn-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 1.25C3.48122 1.25 2.25 2.48122 2.25 4C2.25 5.51878 3.48122 6.75 5 6.75C6.51878 6.75 7.75 5.51878 7.75 4C7.75 2.48122 6.51878 1.25 5 1.25ZM3.75 4C3.75 3.30964 4.30964 2.75 5 2.75C5.69036 2.75 6.25 3.30964 6.25 4C6.25 4.69036 5.69036 5.25 5 5.25C4.30964 5.25 3.75 4.69036 3.75 4Z"
                    fill="#fff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8V21C7.75 21.4142 7.41421 21.75 7 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V8ZM3.75 8.75V20.25H6.25V8.75H3.75Z"
                    fill="#fff"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.25 8C9.25 7.58579 9.58579 7.25 10 7.25H14C14.4142 7.25 14.75 7.58579 14.75 8V8.43402L15.1853 8.24748C15.9336 7.92676 16.7339 7.72565 17.5433 7.65207C20.3182 7.3998 22.75 9.58038 22.75 12.3802V21C22.75 21.4142 22.4142 21.75 22 21.75H18C17.5858 21.75 17.25 21.4142 17.25 21V14C17.25 13.6685 17.1183 13.3505 16.8839 13.1161C16.6495 12.8817 16.3315 12.75 16 12.75C15.6685 12.75 15.3505 12.8817 15.1161 13.1161C14.8817 13.3505 14.75 13.6685 14.75 14V21C14.75 21.4142 14.4142 21.75 14 21.75H10C9.58579 21.75 9.25 21.4142 9.25 21V8ZM10.75 8.75V20.25H13.25V14C13.25 13.2707 13.5397 12.5712 14.0555 12.0555C14.5712 11.5397 15.2707 11.25 16 11.25C16.7293 11.25 17.4288 11.5397 17.9445 12.0555C18.4603 12.5712 18.75 13.2707 18.75 14V20.25H21.25V12.3802C21.25 10.4759 19.589 8.97227 17.6791 9.14591C17.025 9.20536 16.3784 9.36807 15.7762 9.6262L14.2954 10.2608C14.0637 10.3601 13.7976 10.3363 13.5871 10.1976C13.3767 10.0588 13.25 9.82354 13.25 9.57143V8.75H10.75Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a href="#" className="ig-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  id="icon"
                >
                  <circle cx="22.4056" cy="9.5944" r="1.44" />
                  <path d="M16,9.8378A6.1622,6.1622,0,1,0,22.1622,16,6.1622,6.1622,0,0,0,16,9.8378ZM16,20a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z" />
                  <path d="M16,6.1622c3.2041,0,3.5837.0122,4.849.07a6.6418,6.6418,0,0,1,2.2283.4132,3.9748,3.9748,0,0,1,2.2774,2.2774,6.6418,6.6418,0,0,1,.4132,2.2283c.0577,1.2653.07,1.6449.07,4.849s-.0122,3.5837-.07,4.849a6.6418,6.6418,0,0,1-.4132,2.2283,3.9748,3.9748,0,0,1-2.2774,2.2774,6.6418,6.6418,0,0,1-2.2283.4132c-1.2652.0577-1.6446.07-4.849.07s-3.5838-.0122-4.849-.07a6.6418,6.6418,0,0,1-2.2283-.4132,3.9748,3.9748,0,0,1-2.2774-2.2774,6.6418,6.6418,0,0,1-.4132-2.2283c-.0577-1.2653-.07-1.6449-.07-4.849s.0122-3.5837.07-4.849a6.6418,6.6418,0,0,1,.4132-2.2283A3.9748,3.9748,0,0,1,8.9227,6.6453a6.6418,6.6418,0,0,1,2.2283-.4132c1.2653-.0577,1.6449-.07,4.849-.07M16,4c-3.259,0-3.6677.0138-4.9476.0722A8.8068,8.8068,0,0,0,8.14,4.63,6.1363,6.1363,0,0,0,4.63,8.14a8.8068,8.8068,0,0,0-.5578,2.9129C4.0138,12.3323,4,12.741,4,16s.0138,3.6677.0722,4.9476A8.8074,8.8074,0,0,0,4.63,23.8605a6.1363,6.1363,0,0,0,3.51,3.51,8.8068,8.8068,0,0,0,2.9129.5578C12.3323,27.9862,12.741,28,16,28s3.6677-.0138,4.9476-.0722a8.8074,8.8074,0,0,0,2.9129-.5578,6.1363,6.1363,0,0,0,3.51-3.51,8.8074,8.8074,0,0,0,.5578-2.9129C27.9862,19.6677,28,19.259,28,16s-.0138-3.6677-.0722-4.9476A8.8068,8.8068,0,0,0,27.37,8.14a6.1363,6.1363,0,0,0-3.51-3.5095,8.8074,8.8074,0,0,0-2.9129-.5578C19.6677,4.0138,19.259,4,16,4Z" />
                  <rect
                    id="_Transparent_Rectangle_"
                    fill="none"
                    width="32"
                    height="32"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
