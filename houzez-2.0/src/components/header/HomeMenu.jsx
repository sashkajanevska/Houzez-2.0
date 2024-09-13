const HomeMenu = () => {
  return (
    <ul
      class="dropdown-content menu p-0 shadow bg-base-100 w-[250px]"
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

      <li class="relative group">
        <a href="" class="justify-between">
          MAPS
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
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px]">
          <li class="border-b-0">
            <a href="">WITH MAP</a>
          </li>
        </ul>
      </li>

      <li class="relative group">
        <a href="" class="justify-between">
          PARALLAX
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
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px]">
          <li>
            <a href="">PARALLAX STANDARD</a>
          </li>
          <li class="border-b-0">
            <a href="">PARALLAX FULLSCREEN</a>
          </li>
        </ul>
      </li>

      <li class="relative group">
        <a href="" class="justify-between">
          VIDEO
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
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px]">
          <li>
            <a href="">VIDEO STANDARD</a>
          </li>
          <li class="border-b-0">
            <a href="">VIDEO FULLSCREEN</a>
          </li>
        </ul>
      </li>

      <li class="relative group">
        <a href="" class="justify-between">
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
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px]">
          <li>
            <a href="">SLIDER REVOLUTION</a>
          </li>
          <li class="border-b-0">
            <a href="">PROPERTIES SLIDER</a>
          </li>
        </ul>
      </li>
      
      <li class="relative group border-b-0">
        <a href="" class="justify-between">
          SPLASH
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
        </a>
        <ul class="absolute left-full top-0 hidden group-hover:block p-0 m-0 bg-base-100 shadow-lg w-[250px]">
          <li>
            <a href="">VIDEO FULLSCREEN</a>
          </li>
          <li>
            <a href="">SLIDER FULLSCREEN</a>
          </li>
          <li class="border-b-0">
            <a href="">IMAGE FULLSCREEN</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default HomeMenu;
