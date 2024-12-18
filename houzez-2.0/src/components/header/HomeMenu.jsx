import toggleSubmenu from "../utils/toggleSubmenu";

const HomeMenu = () => {
  return (
    <ul
      className="dropdown-content menu p-0 shadow bg-base-100 w-[250px]"
      style={{ transform: "scale(1)" }}
    >
      <li>
        <a href="" className="new-feature">
          WITH CAPTION FORM
        </a>
      </li>

      <li>
        <a href="" className="new-feature">
          WITH OVERLAY SIDE SEARCH
        </a>
      </li>

      <li className="relative group submenu-item">
        <a href="" className="justify-between">
          MAPS
          <svg
            className="desktop-menu-button"
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
        <ul className="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li className="border-b-0">
            <a href="">WITH MAP</a>
          </li>
        </ul>
      </li>

      <li className="relative group submenu-item">
        <a href="" className="justify-between">
          PARALLAX
          <svg
            className="desktop-menu-button"
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
        <ul className="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">PARALLAX STANDARD</a>
          </li>
          <li className="border-b-0">
            <a href="">PARALLAX FULLSCREEN</a>
          </li>
        </ul>
      </li>

      <li className="relative group submenu-item">
        <a href="" className="justify-between">
          VIDEO
          <svg
            className="desktop-menu-button"
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
        <ul className="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">VIDEO STANDARD</a>
          </li>
          <li className="border-b-0">
            <a href="">VIDEO FULLSCREEN</a>
          </li>
        </ul>
      </li>

      <li className="relative group submenu-item">
        <a href="" className="justify-between">
          SLIDERS
          <svg
            className="desktop-menu-button"
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
        <ul className="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">SLIDER REVOLUTION</a>
          </li>
          <li className="border-b-0">
            <a href="">PROPERTIES SLIDER</a>
          </li>
        </ul>
      </li>

      <li className="relative group submenu-item">
        <a href="" className="justify-between">
          SPLASH
          <svg
            className="desktop-menu-button"
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
        <ul className="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px] submenu">
          <li>
            <a href="">VIDEO FULLSCREEN</a>
          </li>
          <li>
            <a href="">SLIDER FULLSCREEN</a>
          </li>
          <li className="border-b-0">
            <a href="">IMAGE FULLSCREEN</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default HomeMenu;