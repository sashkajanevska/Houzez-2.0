import { useState } from "react";
import { Link } from "react-router-dom";
import HomeMenu from "./HomeMenu";
import ListingMenu from "./ListingMenu";
import PropertyMenu from "./PropertyMenu";
import PagesMenu from "./PagesMenu";
import ElementorMenu from "./ElementorMenu";
import SearchesMenu from "./SearchesMenu";
import UserMenu from "./UserMenu";
import MobileHeader from "./MobileHeader";
import LoginModal from "./LoginModal";
import ResetPasswordModal from "./ResetPasswordModal";
import "../../styles/header/Header.css";

export default function Header({ newClass }) {
  const [isLoginModalActive, setIsLoginModalActive] = useState(false);
  const [isResetModalActive, setIsResetModalActive] = useState(false);

  const openLoginOverlay = () => {
    setIsLoginModalActive(!isLoginModalActive);
  };

  return (
    <header className={`header ${newClass}`}>
      <div className="header-inner">
        <div className="header-desktop">
          <div className="header-desktop-inner">
            <div className="logo">
              <Link to={"/"}>
                <img src="./images/header/logo-houzez-white.png" alt="logo" />
              </Link>
            </div>

            <div className="nav-box">
              <nav>
                <div className="dropdown dropdown-hover nav-item">
                  <div className={`nav-link ${newClass}`}>
                    <a href="#">HOME</a>
                  </div>
                  <HomeMenu />
                </div>
                <div className="dropdown dropdown-hover nav-item">
                  <div className={`nav-link ${newClass}`}>
                    <a href="#">LISTING</a>
                  </div>
                  <ListingMenu />
                </div>
                <div className="dropdown dropdown-hover nav-item">
                  <div className={`nav-link ${newClass}`}>
                    <a href="#">PROPERTY</a>
                  </div>
                  <PropertyMenu />
                </div>
                <div className="dropdown dropdown-hover nav-item">
                  <div className={`nav-link ${newClass}`}>
                    <a href="#">PAGES</a>
                  </div>
                  <PagesMenu />
                </div>
                <div className="dropdown dropdown-hover nav-item">
                  <div className={`nav-link ${newClass}`}>
                    <a href="#" className="new">
                      ELEMENTOR
                    </a>
                  </div>
                  <ElementorMenu />
                </div>
                <div className="dropdown dropdown-hover nav-item">
                  <div className={`nav-link ${newClass}`}>
                    <a href="#">SEARCHES</a>
                  </div>
                  <SearchesMenu />
                </div>
              </nav>
            </div>

            <div className="buttons-box">
              <div className="dropdown dropdown-hover dropdown-left user-item">
                <div className="user-button">
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      openLoginOverlay();
                    }}
                  >
                    <img
                      src="./images/header/user-circle-desktop.svg"
                      alt="user"
                    />
                  </a>
                </div>
                <UserMenu />
              </div>
              <button className={`listing-button ${newClass}`}>
                <a href="">CREATE A LISTING</a>
              </button>
            </div>
          </div>
        </div>

        <MobileHeader openLoginOverlay={openLoginOverlay} />
        <LoginModal
          isLoginModalActive={isLoginModalActive}
          setIsLoginModalActive={setIsLoginModalActive}
          isResetModalActive={isResetModalActive}
          setIsResetModalActive={setIsResetModalActive}
        />
        <ResetPasswordModal
          isResetModalActive={isResetModalActive}
          setIsResetModalActive={setIsResetModalActive}
        />
      </div>
    </header>
  );
}
