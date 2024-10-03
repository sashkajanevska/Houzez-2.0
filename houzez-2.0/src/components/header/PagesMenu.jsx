import { Link } from "react-router-dom";
import toggleSubmenu from "../utils/toggleSubmenu";

const PagesMenu = () => {
  return (
    <ul
      class="dropdown-content menu p-0 shadow bg-base-100 w-[250px]"
      style={{ transform: "scale(1)" }}
    >
      <li class="relative group submenu-item">
        <a href="">
          AGENT
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="13px"
              viewBox="0 0 300 1024"
            >
              <path
                fill="#5b6d7a"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              />
            </svg>
          </div>
          <span
            className="svg-wrapper-mobile"
            onClick={(e) => toggleSubmenu(e)}
          >
            <svg
              className="mobile-menu-button"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="11px"
              height="11px"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z" />
            </svg>
          </span>
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">ALL AGENTS V1</a>
          </li>
          <li>
            <a href="">ALL AGENTS V2</a>
          </li>
          <li>
            <a href="">ALL AGENTS V3</a>
          </li>
          <li>
            <a href="">AGENT PROFILE V1</a>
          </li>
          <li class="border-b-0">
            <a href="">AGENT PROFILE V2</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          AGENCIES
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="13px"
              viewBox="0 0 300 1024"
            >
              <path
                fill="#5b6d7a"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              />
            </svg>
          </div>
          <span
            className="svg-wrapper-mobile"
            onClick={(e) => toggleSubmenu(e)}
          >
            <svg
              className="mobile-menu-button"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="11px"
              height="11px"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z" />
            </svg>
          </span>
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">ALL AGENCIES V1</a>
          </li>
          <li>
            <a href="">ALL AGENCIES V2</a>
          </li>
          <li>
            <a href="">AGENCY PROFILE V1</a>
          </li>
          <li class="border-b-0">
            <a href="">AGENCY PROFILE V2</a>
          </li>
        </ul>
      </li>

      <li>
        <Link to={"/contact"} className="new-feature">
          CONTACT
        </Link>
      </li>

      <li>
        <a href="" className="new-feature">
          INQUIRY FORM
        </a>
      </li>

      <li>
        <Link to={"/about"} className="new-feature">
          ABOUT US
        </Link>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          PROPERTY STATUS
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="13px"
            viewBox="0 0 300 1024"
          >
            <path
              fill="#5b6d7a"
              d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
            />
          </svg>
          <span onClick={(e) => toggleSubmenu(e)}>
            <svg
              className="mobile-menu-button"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="11px"
              height="11px"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z" />
            </svg>
          </span>
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">FOR RENT</a>
          </li>
          <li class="border-b-0">
            <a href="">FOR SALE</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          PROPERTY TYPE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="13px"
            viewBox="0 0 300 1024"
          >
            <path
              fill="#5b6d7a"
              d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
            />
          </svg>
          <span onClick={(e) => toggleSubmenu(e)}>
            <svg
              className="mobile-menu-button"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="11px"
              height="11px"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z" />
            </svg>
          </span>
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">APARTMENT</a>
          </li>
          <li>
            <a href="">SINGLE FAMILY HOME</a>
          </li>
          <li class="border-b-0">
            <a href="">VILLA</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          PROPERTY CITY
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="13px"
            viewBox="0 0 300 1024"
          >
            <path
              fill="#5b6d7a"
              d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
            />
          </svg>
          <span onClick={(e) => toggleSubmenu(e)}>
            <svg
              className="mobile-menu-button"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="11px"
              height="11px"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z" />
            </svg>
          </span>
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">MIAMI</a>
          </li>
          <li class="border-b-0">
            <a href="">LOS ANGELES</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          PROPERTY FEATURES
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="13px"
            viewBox="0 0 300 1024"
          >
            <path
              fill="#5b6d7a"
              d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
            />
          </svg>
          <span onClick={(e) => toggleSubmenu(e)}>
            <svg
              className="mobile-menu-button"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="11px"
              height="11px"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z" />
            </svg>
          </span>
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">SWIMMING POOL</a>
          </li>
          <li>
            <a href="">WIFI</a>
          </li>
          <li>
            <a href="">GYM</a>
          </li>
          <li class="border-b-0">
            <a href="">LAUNDRY</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          BLOG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="13px"
            viewBox="0 0 300 1024"
          >
            <path
              fill="#5b6d7a"
              d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
            />
          </svg>
          <span onClick={(e) => toggleSubmenu(e)}>
            <svg
              className="mobile-menu-button"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              width="11px"
              height="11px"
              viewBox="0 0 32 32"
              version="1.1"
            >
              <path d="M0.256 8.606c0-0.269 0.106-0.544 0.313-0.75 0.412-0.412 1.087-0.412 1.5 0l14.119 14.119 13.913-13.912c0.413-0.412 1.087-0.412 1.5 0s0.413 1.088 0 1.5l-14.663 14.669c-0.413 0.413-1.088 0.413-1.5 0l-14.869-14.869c-0.213-0.213-0.313-0.481-0.313-0.756z" />
            </svg>
          </span>
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">SIMPLE BLOG</a>
          </li>
          <li class="border-b-0">
            <a href="">MASONRY BLOG</a>
          </li>
        </ul>
      </li>

      <li>
        <a href="">TYPOGRAPHY</a>
      </li>

      <li class="border-b-0">
        <a href="">404 PAGE</a>
      </li>
    </ul>
  );
};

export default PagesMenu;
