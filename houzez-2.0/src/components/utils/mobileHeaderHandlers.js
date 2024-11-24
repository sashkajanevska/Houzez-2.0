const toggleDocumentOverflow = (menu) => {
  document.documentElement.style.overflowY = menu !== "" ? "hidden" : "auto";
  document.body.style.overflowY = menu !== "" ? "hidden" : "auto";
};

const closeSubmenu = () => {
  const activeSubmenuItem = document.querySelector(".submenu-item.active");

  if (activeSubmenuItem) {
    activeSubmenuItem.classList.remove("active");
    activeSubmenuItem.style.height = "";
  }
};

export const toggleNavMenu = (activeMenu, setActiveMenu) => {
  const navBox = document.querySelector(".nav-box-mobile");
  const activeNavItem = document.querySelector(".nav-item.active");

  if (activeMenu === "") {
    navBox.classList.toggle("active");
    setActiveMenu("navMenu");
    toggleDocumentOverflow("navMenu");
  } else if (activeMenu === "navMenu") {
    navBox.classList.toggle("active");
    setActiveMenu("");
    toggleDocumentOverflow("");

    closeSubmenu();
    if (activeNavItem) {
      activeNavItem.classList.remove("active");
      activeNavItem.style.height = "";
    }
  } else {
    return;
  }
};

export const toggleDropdownMenu = (e) => {
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

export const toggleUserMenu = (activeMenu, setActiveMenu) => {
  const userToolsBox = document.querySelector(".user-tools-box");

  if (activeMenu === "") {
    userToolsBox.classList.toggle("active");
    setActiveMenu("userMenu");
    toggleDocumentOverflow("userMenu");
  } else if (activeMenu === "userMenu") {
    userToolsBox.classList.toggle("active");
    setActiveMenu("");
    toggleDocumentOverflow("");
  } else {
    return;
  }
};
