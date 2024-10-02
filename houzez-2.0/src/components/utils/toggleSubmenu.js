export default function toggleSubmenu(e) {
  e.preventDefault();
  e.stopPropagation();

  const submenuItem = e.target.closest(".submenu-item");
  const navItem = submenuItem.closest(".nav-item");
  const submenu = submenuItem.querySelector(".submenu");
  const activeSubmenuItem = document.querySelector(".submenu-item.active");
  const activeSubmenu = document.querySelector(".submenu-item.active .submenu");
  const submenuHeight = submenu.scrollHeight;
  const activeSubmenuHeight = activeSubmenu ? activeSubmenu.scrollHeight : null;

  if (activeSubmenuItem && activeSubmenuItem !== submenuItem) {
    activeSubmenuItem.classList.remove("active");
    activeSubmenuItem.style.height = "";
  }

  submenuItem.classList.toggle("active");

  if (submenuItem.classList.contains("active")) {
    const linkHeight = 51;
    submenuItem.style.height = `${submenuHeight + linkHeight}px`;

    activeSubmenuHeight
      ? (navItem.style.height = `${
          navItem.scrollHeight - activeSubmenuHeight + submenuHeight
        }px`)
      : (navItem.style.height = `${navItem.scrollHeight + submenuHeight}px`);
  } else {
    submenuItem.style.height = "";
    navItem.style.height = `${navItem.scrollHeight - submenuHeight}px`;
  }
}
