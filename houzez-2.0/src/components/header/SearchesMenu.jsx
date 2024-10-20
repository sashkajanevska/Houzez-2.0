const SearchesMenu = () => {
  return (
    <ul
      className="dropdown-content menu p-0 shadow bg-base-100 w-[250px]"
      style={{ transform: "scale(1)" }}
    >
      <li>
        <a href="" className="new-feature">
          ELEMENTOR SEARCH BUILDER
        </a>
      </li>

      <li>
        <a href="">SEARCH V1 — HEADER</a>
      </li>

      <li>
        <a href="">SEARCH V1 — BELOW BANNER</a>
      </li>

      <li>
        <a href="">SEARCH V2 — HEADER</a>
      </li>

      <li>
        <a href="">SEARCH V2 — BELOW BANNER</a>
      </li>

      <li>
        <a href="" className="new-feature">
          SEARCH V3 — HEADER
        </a>
      </li>

      <li>
        <a href="" className="new-feature">
          SEARCH V3 — BELOW BANNER
        </a>
      </li>

      <li>
        <a href="">DOCK SEARCH</a>
      </li>

      <li>
        <a href="">BANNER SEARCH</a>
      </li>

      <li>
        <a href="" className="new-feature">
          BANNER SEARCH WITH TABS
        </a>
      </li>

      <li className="border-b-0">
        <a href="">SEARCH WIDGET</a>
      </li>
    </ul>
  );
};

export default SearchesMenu;