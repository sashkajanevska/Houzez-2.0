const UserMenu = () => {
  return (
    <ul
      className="dropdown-content menu p-0 shadow bg-base-100 w-[250px] user-dropdown"
      style={{ transform: "scale(1)" }}
    >
      <li className="border-b-0">
        <a href="" className="dropdown-link">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 192 192"
              xmlSpace="preserve"
              fill="none"
            >
              <path
                d="M60.732 29.7C41.107 29.7 22 39.7 22 67.41c0 27.29 45.274 67.29 74 94.89 28.744-27.6 74-67.6 74-94.89 0-27.71-19.092-37.71-38.695-37.71C116 29.7 104.325 41.575 96 54.066 87.638 41.516 76 29.7 60.732 29.7z"
                stroke="#2e3e49"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="2"
              />
            </svg>
            FAVORITES
          </div>
          <button>0</button>
        </a>
      </li>
    </ul>
  );
};

export default UserMenu;