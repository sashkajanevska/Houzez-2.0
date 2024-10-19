import HomeMenu from "./HomeMenu";
import ListingMenu from "./ListingMenu";
import PropertyMenu from "./PropertyMenu";
import PagesMenu from "./PagesMenu";
import ElementorMenu from "./ElementorMenu";
import SearchesMenu from "./SearchesMenu";
import { useState } from "react";

export default function MobileHeader({ openModalOverlay }) {
  const [activeMenu, setActiveMenu] = useState("");

  const toggleBodyOverflow = () => {
    document.body.style.overflowY = activeMenu === "" ? "hidden" : "auto";
  };

  const closeSubmenu = () => {
    const activeSubmenuItem = document.querySelector(".submenu-item.active");

    if (activeSubmenuItem) {
      activeSubmenuItem.classList.remove("active");
      activeSubmenuItem.style.height = "";
    }
  };

  const toggleNavMenu = () => {
    const navBox = document.querySelector(".nav-box-mobile");
    const activeNavItem = document.querySelector(".nav-item.active");

    if (activeMenu === "") {
      navBox.classList.toggle("active");
      setActiveMenu("navMenu");
      toggleBodyOverflow();
    } else if (activeMenu === "navMenu") {
      navBox.classList.toggle("active");
      setActiveMenu("");
      toggleBodyOverflow();

      closeSubmenu();
      if (activeNavItem) {
        activeNavItem.classList.remove("active");
        activeNavItem.style.height = "";
      }
    } else {
      return;
    }
  };

  const toggleDropdownMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const navItem = e.target.closest(".nav-item");
    const activeNavItem = document.querySelector(".nav-item.active");

    closeSubmenu();
    if (activeNavItem && activeNavItem !== navItem) {
      activeNavItem.classList.remove("active");
      activeNavItem.style.height = "";
    }

    navItem.classList.toggle("active");

    if (navItem.classList.contains("active")) {
      const menu = navItem.querySelector(".dropdown-content");
      const navLinkHeight = 56;
      const menuHeight = menu.scrollHeight;
      navItem.style.height = `${menuHeight + navLinkHeight}px`;
    } else {
      navItem.style.height = "";
    }
  };

  const toggleUserMenu = () => {
    const userToolsBox = document.querySelector(".user-tools-box");

    if (activeMenu === "") {
      userToolsBox.classList.toggle("active");
      setActiveMenu("userMenu");
      toggleBodyOverflow();
    } else if (activeMenu === "userMenu") {
      userToolsBox.classList.toggle("active");
      setActiveMenu("");
      toggleBodyOverflow();
    } else {
      return;
    }
  };

  return (
    <div className="header-mobile">
      <div className="header-mobile-inner">
        <div className="menu-toggle-button" onClick={toggleNavMenu}>
          <img src="./images/header/menu.svg" alt="menu" />
          <div className="nav-box-mobile">
            <nav>
              <div className="dropdown nav-item">
                <div className="nav-link">
                  <a>
                    HOME
                    <span onClick={(e) => toggleDropdownMenu(e)}>
                      <img
                        src="./images/header/arrow-down-mobile.svg"
                        alt="arrow-down"
                      />
                    </span>
                  </a>
                </div>
                <HomeMenu />
              </div>
              <div className="dropdown nav-item">
                <div className="nav-link">
                  <a>
                    LISTING
                    <span onClick={(e) => toggleDropdownMenu(e)}>
                      <img
                        src="./images/header/arrow-down-mobile.svg"
                        alt="arrow-down"
                      />
                    </span>
                  </a>
                </div>
                <ListingMenu />
              </div>
              <div className="dropdown nav-item">
                <div className="nav-link">
                  <a>
                    PROPERTY
                    <span onClick={(e) => toggleDropdownMenu(e)}>
                      <img
                        src="./images/header/arrow-down-mobile.svg"
                        alt="arrow-down"
                      />
                    </span>
                  </a>
                </div>
                <PropertyMenu />
              </div>
              <div className="dropdown nav-item">
                <div className="nav-link">
                  <a>
                    PAGES
                    <span onClick={(e) => toggleDropdownMenu(e)}>
                      <img
                        src="./images/header/arrow-down-mobile.svg"
                        alt="arrow-down"
                      />
                    </span>
                  </a>
                </div>
                <PagesMenu />
              </div>
              <div className="dropdown nav-item">
                <div className="nav-link">
                  <a>
                    ELEMENTOR
                    <span
                      className="new"
                      onClick={(e) => toggleDropdownMenu(e)}
                    >
                      <img
                        src="./images/header/arrow-down-mobile.svg"
                        alt="arrow-down"
                      />
                    </span>
                  </a>
                </div>
                <ElementorMenu />
              </div>
              <div className="dropdown nav-item">
                <div className="nav-link">
                  <a>
                    SEARCHES
                    <span onClick={(e) => toggleDropdownMenu(e)}>
                      <img
                        src="./images/header/arrow-down-mobile.svg"
                        alt="arrow-down"
                      />
                    </span>
                  </a>
                </div>
                <SearchesMenu />
              </div>
            </nav>
          </div>
        </div>

        <div className="logo-mobile">
          <a href="">
            <img src="./images/header/logo-houzez-color.png" alt="logo" />
          </a>
        </div>

        <div className="user-toggle-button" onClick={toggleUserMenu}>
          <img src="./images/header/user-circle-mobile.svg" alt="user" />
          <ul className="user-tools-box">
            <li className="login-link" onClick={openModalOverlay}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#222"
                  width="22px"
                  height="26px"
                  viewBox="0 0 28 28"
                >
                  <path d="M8,9.25468928 L8,6 C8,3.790861 9.790861,2 12,2 C14.209139,2 16,3.790861 16,6 L16,9.25468928 C17.8134841,10.5196354 19,12.6212549 19,15 C19,18.8659932 15.8659932,22 12,22 C8.13400675,22 5,18.8659932 5,15 C5,12.6212549 6.1865159,10.5196354 8,9.25468928 L8,9.25468928 Z M15,8.67363116 L15,6 C15,4.34314575 13.6568542,3 12,3 C10.3431458,3 9,4.34314575 9,6 L9,8.67363116 C9.90925538,8.24169105 10.9264027,8 12,8 C13.0735973,8 14.0907446,8.24169105 15,8.67363116 Z M12,21 C15.3137085,21 18,18.3137085 18,15 C18,11.6862915 15.3137085,9 12,9 C8.6862915,9 6,11.6862915 6,15 C6,18.3137085 8.6862915,21 12,21 Z M11,14 L11,14.381966 C11,15.0395948 11.1531131,15.6881921 11.4472136,16.2763932 L11.7236068,16.8291796 C11.7759518,16.9338696 11.882953,17 12,17 C12.117047,17 12.2240482,16.9338696 12.2763932,16.8291796 L12.5527864,16.2763932 C12.8468869,15.6881921 13,15.0395948 13,14.381966 L13,14 C13,13.4477153 12.5522847,13 12,13 C11.4477153,13 11,13.4477153 11,14 Z M10,14 C10,12.8954305 10.8954305,12 12,12 C13.1045695,12 14,12.8954305 14,14 L14,14.381966 C14,15.1948399 13.8107418,15.9965503 13.4472136,16.7236068 L13.1708204,17.2763932 C12.9490834,17.7198673 12.4958191,18 12,18 C11.5041809,18 11.0509166,17.7198673 10.8291796,17.2763932 L10.5527864,16.7236068 C10.1892582,15.9965503 10,15.1948399 10,14.381966 L10,14 Z" />
                </svg>
                LOGIN
              </a>
            </li>
            <li className="favorites-link">
              <a href="">
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
                    stroke="#000"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                  />
                </svg>
                FAVORITES
                <button>0</button>
              </a>
            </li>
            <button className="listing-button">
              <a href="">CREATE A LISTING</a>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
