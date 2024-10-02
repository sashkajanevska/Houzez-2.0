import toggleSubmenu from "../utils/toggleSubmenu";

const ListingMenu = () => {
  return (
    <ul
      class="dropdown-content menu p-0 shadow bg-base-100 w-[250px]"
      style={{ transform: "scale(1)" }}
    >
      <li class="relative group submenu-item">
        <a href="">
          LISTING V1
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
            <a href="">LISTING V1 — GRID</a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V1 — GRID 2 COLS
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V1 — GRID 3 COLS
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V1 — GRID 4 COLS
            </a>
          </li>
          <li>
            <a href="">LISTING V1 — LIST</a>
          </li>
          <li>
            <a href="">LISTING V1 — LIST FULL WIDTH</a>
          </li>
          <li class="border-b-0">
            <a href="" className="new-feature">
              LISTING V1 — WITH TABS
            </a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          LISTING V2
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
            <a href="">LISTING V2 — GRID</a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V2 — GRID 2 COLS
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V2 — GRID 3 COLS
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V2 — GRID 4 COLS
            </a>
          </li>
          <li>
            <a href="">LISTING V2 — LIST</a>
          </li>
          <li>
            <a href="">LISTING V2 — LIST FULL WIDTH</a>
          </li>
          <li class="border-b-0">
            <a href="" className="new-feature">
              LISTING V2 — WITH TABS
            </a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          LISTING V3
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
            <a href="">LISTING V3 — GRID</a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V3 — GRID 2 COLS
            </a>
          </li>
          <li class="border-b-0">
            <a href="" className="new-feature">
              LISTING V3 — GRID 3 COLS
            </a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          LISTING V4
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
            <a href="" className="new-feature">
              LISTING V4 — LIST
            </a>
          </li>
          <li class="border-b-0">
            <a href="">LISTING V4 — GRID</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          LISTING V5
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
            <a href="" className="new-feature">
              LISTING V5 — GRID
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V5 — GRID 2 COLS
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V5 — GRID 3 COLS
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V5 — LIST
            </a>
          </li>
          <li class="border-b-0">
            <a href="" className="new-feature">
              LISTING V5 — LIST FULL WIDTH
            </a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          LISTING V6
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
            <a href="" className="new-feature">
              LISTING V6 — GRID
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              LISTING V6 — GRID 2 COLS
            </a>
          </li>
          <li class="border-b-0">
            <a href="" className="new-feature">
              LISTING V6 — GRID 3 COLS
            </a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          LISTING V7
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
            <a href="">LISTING V7 — GRID</a>
          </li>
          <li>
            <a href="">LISTING V7 — GRID 3 COLS</a>
          </li>
          <li>
            <a href="">LISTING V7 — GRID 4 COLS</a>
          </li>
          <li>
            <a href="">LISTING V7 — LIST</a>
          </li>
          <li class="border-b-0">
            <a href="">LISTING V7 — LIST FULL WIDTH</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          WITH CONTENT
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
            <a href="" className="new-feature">
              CONTENT ON TOP
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              CONTENT ON TOP FULL WIDTH
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              CONTENT AT BOTTOM
            </a>
          </li>
          <li class="border-b-0">
            <a href="" className="new-feature">
              CONTENT AT BOTTOM FULL WIDTH
            </a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          ELEMENTOR
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
            <a href="" className="new-feature">
              WITH SIDEBAR
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              FULL WIDTH
            </a>
          </li>
          <li>
            <a href="">WITH PROPERTY STATUS TABS</a>
          </li>
          <li>
            <a href="" className="new-feature">
              WITH PROPERTY CITY TABS
            </a>
          </li>
          <li class="border-b-0">
            <a href="" className="new-feature">
              WITH PROPERTY TYPE TABS
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="" className="new-feature">
          FEATURED LISTINGS ON TOP
        </a>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          HALF MAP
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
            <a href="">HALF MAP — SIDE SEARCH</a>
          </li>
          <li>
            <a href="" className="new-feature">
              HALF MAP — SEARCH V1
            </a>
          </li>
          <li>
            <a href="" className="new-feature">
              HALF MAP — SEARCH V2
            </a>
          </li>
          <li class="border-b-0">
            <a href="" className="new-feature">
              HALF MAP — SEARCH V3
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="">LISTINGS PARALLAX</a>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          LISTING WITH MAP
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
            <a href="">LISTING WITH MAP</a>
          </li>
          <li class="border-b-0">
            <a href="">LISTING WITH MAP FULLSCREEN</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          PARALLAX BANNER
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
            <a href="">PARALLAX BANNER STANDARD</a>
          </li>
          <li class="border-b-0">
            <a href="">PARALLAX BANNER FULLSCREEN</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          VIDEO BANNER
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
            <a href="">VIDEO BANNER STANDARD</a>
          </li>
          <li class="border-b-0">
            <a href="">VIDEO BANNER FULLSCREEN</a>
          </li>
        </ul>
      </li>

      <li class="relative group border-b-0 submenu-item">
        <a href="">
          SLIDERS
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
            <a href="">SLIDER REVOLUTION</a>
          </li>
          <li class="border-b-0">
            <a href="">PROPERTIES SLIDER</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ListingMenu;