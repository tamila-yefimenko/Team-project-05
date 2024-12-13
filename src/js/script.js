document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn =
    document.querySelector('[data-menu-open]');
  const menuCloseBtn =
    document.querySelector('[data-menu-close]');
  const menuBackdrop =
    document.querySelector('[data-menu]');
  
  const openMenu = () => {
    menuBackdrop.classList.add('is-open');
  };

  const closeMenu = () => {
    menuBackdrop.classList.remove('is-open');
  };

  menuOpenBtn.addEventListener('click', openMenu);
  menuCloseBtn.addEventListener('click', closeMenu);
  
  document.addEventListener('click', (event) => {
    if (menuBackdrop.classList.contains('is-open') &&
      !menuBackdrop.contains(event.target) &&
      !menuOpenBtn.contains(event.target)
    ) {
      closeMenu();
    }
  })
  })