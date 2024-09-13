import HomeMenu from "./header/HomeMenu";
import ListingMenu from "./header/ListingMenu";
import PropertyMenu from "./header/PropertyMenu";
import PagesMenu from "./header/PagesMenu";
import ElementorMenu from "./header/ElementorMenu";
import SearchesMenu from "./header/SearchesMenu";
import UserMenu from "./header/UserMenu";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-desktop">
          <div className="header-desktop-inner">
            <div className="logo">
              <a href="">
                <img src="./images/header/logo-houzez-white.png" alt="logo" />
              </a>
            </div>

            <div className="nav-box">
              <nav>
                <div class="dropdown dropdown-hover nav-item">
                  <div class="nav-link">
                    <a href="">HOME</a>
                  </div>
                  <HomeMenu />
                </div>
                <div class="dropdown dropdown-hover nav-item">
                  <div className="nav-link">
                    <a href="">LISTING</a>
                  </div>
                  <ListingMenu />
                </div>
                <div class="dropdown dropdown-hover nav-item">
                  <div className="nav-link">
                    <a href="">PROPERTY</a>
                  </div>
                  <PropertyMenu />
                </div>
                <div class="dropdown dropdown-hover nav-item">
                  <div className="nav-link">
                    <a href="">PAGES</a>
                  </div>
                  <PagesMenu />
                </div>
                <div class="dropdown dropdown-hover nav-item">
                  <div className="nav-link">
                    <a href="" className="new">
                      ELEMENTOR
                    </a>
                  </div>
                  <ElementorMenu />
                </div>
                <div class="dropdown dropdown-hover nav-item">
                  <div className="nav-link">
                    <a href="">SEARCHES</a>
                  </div>
                  <SearchesMenu />
                </div>
              </nav>
            </div>

            <div className="buttons-box">
              <div class="dropdown dropdown-hover dropdown-left user-item">
                <div className="user-button">
                  <a href="">
                    <img
                      src="./images/header/user-circle-desktop.svg"
                      alt="user"
                    />
                  </a>
                </div>
                <UserMenu />
              </div>
              <button className="listing-button">
                <a href="">CREATE A LISTING</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
