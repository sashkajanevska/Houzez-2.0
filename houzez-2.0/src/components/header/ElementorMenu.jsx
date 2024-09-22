import toggleSubmenu from "./toggleSubmenu";

const ElementorMenu = () => {
  return (
    <ul
      class="dropdown-content menu p-0 shadow bg-base-100 w-[250px]"
      style={{ transform: "scale(1)" }}
    >
      <li class="relative group submenu-item">
        <a href="">
          PROPERTIES CAROUSELES
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
            <a href="">PROPERTIES CAROUSEL V1</a>
          </li>
          <li>
            <a href="">PROPERTIES CAROUSEL V2</a>
          </li>
          <li>
            <a href="">PROPERTIES CAROUSEL V3</a>
          </li>
          <li>
            <a href="">PROPERTIES CAROUSEL V4</a>
          </li>
          <li class="border-b-0">
            <a href="">PROPERTIES CAROUSEL V5</a>
          </li>
        </ul>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          PROPERTIES CARDS
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
            <a href="">PROPERTIES CARD V1</a>
          </li>
          <li>
            <a href="">PROPERTIES CARD V2</a>
          </li>
          <li>
            <a href="">PROPERTIES CARD V3</a>
          </li>
          <li>
            <a href="">PROPERTIES CARD V4</a>
          </li>
          <li>
            <a href="">PROPERTIES CARD V5</a>
          </li>
          <li class="border-b-0">
            <a href="">PROPERTIES CARD V6</a>
          </li>
        </ul>
      </li>

      <li>
        <a href="">GRID BUILDER</a>
      </li>

      <li>
        <a href="">TAXONOMY GRIDS</a>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          FORMS
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
            <a href="">INQUIRY FORM</a>
          </li>
          <li>
            <a href="">CONTACT FORM</a>
          </li>
          <li class="border-b-0">
            <a href="">LEAD CAPITON FORM</a>
          </li>
        </ul>
      </li>

      <li>
        <a href="">PROPERTY GRIDS</a>
      </li>

      <li>
        <a href="">PROPERTIES GOOGLE MAP</a>
      </li>

      <li>
        <a href="">ELEMENTOR SEARCH WIDGET</a>
      </li>

      <li>
        <a href="">PROPERTIES SLIDER</a>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          TESTIMONIALS
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
            <a href="">TESTIMONIALS V1</a>
          </li>
          <li class="border-b-0">
            <a href="">TESTIMONIALS V2</a>
          </li>
        </ul>
      </li>

      <li>
        <a href="">AGENTS</a>
      </li>

      <li>
        <a href="">TEAM</a>
      </li>

      <li class="relative group submenu-item">
        <a href="">
          OTHERS
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
            <a href="">PARTNERS</a>
          </li>
          <li>
            <a href="">TEXT WITH ICONS</a>
          </li>
          <li>
            <a href="">BLOG POST CAROUSEL</a>
          </li>
          <li>
            <a href="">BLOG POST GRIDS</a>
          </li>
          <li>
            <a href="">PROPERTY BY ID</a>
          </li>
          <li>
            <a href="">PROPERTY BY IDS</a>
          </li>
          <li class="border-b-0">
            <a href="">PACKAGES</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default ElementorMenu;
